import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './services/register/register.component';
import { LoginComponent } from './services/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: '', redirectTo: '/login', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
