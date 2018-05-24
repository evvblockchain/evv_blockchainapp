import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckinComponent } from './checkin/checkin.component';
import { ClientinfoComponent } from './clientinfo/clientinfo.component';
import { HistoryComponent } from './history/history.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from './material/material.module';
import {TouchEventModule} from "ng2-events/lib/touch";
import { AgmCoreModule } from '@agm/core';
import { VerifyComponent } from './verify/verify.component';
import { HttpModule } from '@angular/http';
import { Globals } from './globals';
import { MessageService } from './services/message.service';
import {ClockService} from './services/clock.service';
import {LocationService} from './services/location.service';
import {TierionService} from './services/tierion.service';
import {CameraService} from './services/camera.service';
import { DatePipe } from '@angular/common';
import {WindowRef} from './services/window.ref.service';
import {AuthGuard} from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    AppHeaderComponent,
    DashboardComponent,
    CheckinComponent,
    ClientinfoComponent,
    HistoryComponent,
    CheckoutComponent,
    VerifyComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    MaterialModule,
    TouchEventModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAykt0P59dSaId2Od4AhIyHaeGtFR3rda0'
    }),
    HttpModule, 
    
  ],
  providers: [AuthService,
              Globals,
              MessageService,
              ClockService,
              LocationService,
              TierionService,
              CameraService,
              DatePipe,
              WindowRef,
              AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
