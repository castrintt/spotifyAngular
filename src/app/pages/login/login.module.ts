import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './login/login.routes';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(LoginRoutes)],
  // exports: [LoginComponent],
})
export class LoginModule {}
