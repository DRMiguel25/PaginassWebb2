import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './components/login-form.component';


@NgModule({
  declarations: [
    LoginFormComponent
  ],
  exports: [
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  // Asegurarse de importar ReactiveFormsModule
    LoginRoutingModule,
  ]
})
export class LoginModule {}

