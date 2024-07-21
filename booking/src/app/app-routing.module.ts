import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { LandingComponent } from './auth/landing/landing.component';
import { CleaningComponent } from './auth/cleaning/cleaning.component';
import { CarpentryComponent } from './carpentry/carpentry.component';
import { PlumbingComponent } from './plumbing/plumbing.component';
import { PaintingComponent } from './painting/painting.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { WorkerComponent } from './auth/worker/worker.component';
import { PreviousBookingsComponent } from './auth/previous-bookings/previous-bookings.component';

const routes: Routes = [
  {
    path:'register',
    component:AuthComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'landing',
    component:LandingComponent
  },
  {
    path:'cleaning',
    component:CleaningComponent
  },
  {
    path:'carpentry',
    component:CarpentryComponent
  },
  {
    path:'plumbing',
    component:PlumbingComponent
  },
  {
    path:'painting',
    component:PaintingComponent
  },
  {
    path:'appliances',
    component:AppliancesComponent
  },
  {
    path:'',
    component:LandingComponent
  },
  {
    path:'register-worker',
    component:WorkerComponent
  },
  {
    path:'previous-bookings',
    component:PreviousBookingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
