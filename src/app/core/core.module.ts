import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    NavbarComponent, HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent, HeaderComponent],
})
export class CoreModule { }
