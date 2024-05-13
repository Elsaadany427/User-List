import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ErrorHandlingInterceptorProvider } from './core/interceptores/error-handling.interceptor';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,

  ],
  providers: [ErrorHandlingInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
