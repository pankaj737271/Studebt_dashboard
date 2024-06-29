import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard, islogged } from './auth.guard';
import { UserDetailsComponent } from './dashboard/user-details/user-details.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [ 
  { path:'', component: LoginComponent, pathMatch: 'full' },
  { path:'login', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'landing',
    canActivate:[islogged],
    component: LandingPageComponent,
    children: [
      { path: '', component: ReportsComponent, canActivate: [authGuard] },
      { path: 'AllUsers', component: UserDetailsComponent, canActivate: [authGuard] },
      { path: 'reports', component: ReportsComponent },
      { path: 'error', component: ErrorComponent,  }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

