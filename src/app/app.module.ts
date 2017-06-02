import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
//Components
import { AppComponent } from './app.component';
//reg-log
import { LoginComponent } from './components/reg-log/login/login.component';
import { RegisterComponent } from './components/reg-log/register/register.component';
import { LoginFormComponent } from './components/reg-log/login-form/login-form.component';
import { SocialComponent } from './components/reg-log/social/social.component';
//site
import { NavbarComponent } from './components/shared/navbar/navbar.component';
//user
import { DashboardComponent } from './components/dashboard/dashboard.component';
//movies
import { MovieCardComponent } from './components/movies/movie-card/movie-card.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';

//Services
import { AuthService } from './services/auth';
import { MovieService } from './services/movie';

//Third Party Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';

const appRoutes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'movie-details', component: MovieDetailsComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    DashboardComponent,
    NavbarComponent,
    RegisterComponent,
    SocialComponent,
    MovieCardComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    Angular2FontAwesomeModule

  ],
  providers: [
    AuthService,
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
