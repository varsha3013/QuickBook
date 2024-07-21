import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
// import { LoginComponent } from './login/login.component';
// import { AfterLoginComponent } from './after-login/after-login.component';
// import { DashboardComponent } from './dashboard/dashboard.component'
// import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { CleaningComponent } from './cleaning/cleaning.component';
import { PlumbingComponent } from '../plumbing/plumbing.component';
import { WorkerComponent } from './worker/worker.component';
import { PreviousBookingsComponent } from './previous-bookings/previous-bookings.component';
// import { SetPasswordComponent } from './set-password/set-password.component';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    LandingComponent,
    CleaningComponent,
    WorkerComponent,
    PreviousBookingsComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports:
  [
    AuthComponent,
    CleaningComponent,
   

  ]
})
export class AuthModule { }