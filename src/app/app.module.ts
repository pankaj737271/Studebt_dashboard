import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminControllComponent } from './dashboard/admin-controll/admin-controll.component';
import { UserDetailsComponent } from './dashboard/user-details/user-details.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ErrorComponent } from './shared/error/error.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminControllComponent,
    UserDetailsComponent,
    ReportsComponent,
    LandingPageComponent,
    ErrorComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
