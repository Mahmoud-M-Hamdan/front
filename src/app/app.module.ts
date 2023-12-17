import { NgModule  } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignFormComponent } from './components/sign-form/sign-form.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {  PhotoUploadComponent } from './components/photo-editor/photo-editor.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { IntercepInterceptor } from './interceptors/intercep.interceptor';

import { ToastrModule } from 'ngx-toastr';

FormsModule
@NgModule({
  declarations: [
    AppComponent,
    SignFormComponent,
    HomeComponent,
    ModalComponent,
    HeaderComponent,
    PhotoUploadComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({positionClass:'toast-top-center'}), 
  ],
  providers: [    {
    provide: HTTP_INTERCEPTORS,
    useClass: IntercepInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
