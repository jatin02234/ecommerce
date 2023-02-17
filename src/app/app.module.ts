import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { NexonComponent } from './home/nexon/nexon.component';
import { CretaComponent } from './home/creta/creta.component';
import { PunchComponent } from './home/punch/punch.component';
import { I10Component } from './home/i10/i10.component';
import { HarrierComponent } from './home/harrier/harrier.component';
import { TigorComponent } from './home/tigor/tigor.component';
import { HexaComponent } from './home/hexa/hexa.component';
import { VenueComponent } from './home/venue/venue.component';
import { BrezzaComponent } from './home/brezza/brezza.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { authService } from './auth.servise';
import { AuthGuardGuard } from './auth-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    CardComponent,
    NexonComponent,
    CretaComponent,
    PunchComponent,
    I10Component,
    HarrierComponent,
    TigorComponent,
    HexaComponent,
    VenueComponent,
    BrezzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
    
  ],
  providers: [authService,AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
