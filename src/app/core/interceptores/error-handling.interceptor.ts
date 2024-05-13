import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.handleError(request.method)(error);

        // Re-throw the error to propagate it down the error-handling chain
        return throwError(error);
      }),
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

  handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {
      // Log the error to the console
      console.error(`${operation} failed:`, error);

      // Provide a user-friendly message based on the type of error
      let errorMessage: string;
      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMessage = `An error occurred: ${error.error.message}`;
      } else {
        // Server-side error
        errorMessage = `Server returned code ${error.status}, error message: ${error.message}`;
      }

      // Customize error handling based on specific HTTP status codes
      switch (error.status) {
        case 400:
          errorMessage = 'Bad request. Please check your input.';
          break;
        case 401:
          errorMessage = 'Unauthorized. Please log in to access the resource.';
          break;
        case 403:
          errorMessage =
            "Forbidden. You don't have permission to access this resource.";
          break;
        case 404:
          errorMessage = 'Resource not found. Please check your request.';
          break;
        case 500:
          errorMessage = 'Internal server error. Please try again later.';
          // You might want to perform additional actions here, like logging or notifying the user
          break;
        // Add more cases for other status codes as needed
      }

      // Return an observable with a user-friendly error message and an empty result
      return new Observable<T>((observer) =>
        observer.error(errorMessage),
      ) as Observable<T>;
    };
  }
}

export const ErrorHandlingInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorHandlingInterceptor,
  multi: true,
};
