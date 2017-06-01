import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/shared/login-form/login-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

//Services
//Third Party Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';

const appRoutes: Routes = [
  // {path: '', component: AppComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    DashboardComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
