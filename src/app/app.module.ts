import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
//Components
import { AppComponent } from './app.component';
//reg-log
import { LoginComponent } from './components/reg-log/login/login.component';
import { RegisterComponent } from './components/reg-log/register/register.component';
import { LoginFormComponent } from './components/reg-log/login-form/login-form.component';
//user
import { DashboardComponent } from './components/dashboard/dashboard.component';

//Services
import { AuthService } from './services/auth';
//Third Party Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SocialComponent } from './components/reg-log/social/social.component';

const appRoutes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    DashboardComponent,
    NavbarComponent,
    RegisterComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    Angular2FontAwesomeModule

  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
