import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { SignInComponent } from './components/login/sign-in/sign-in.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/login/verify-email/verify-email.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { AuthService } from './shared/services/auth.service';
import { SideMenuComponent } from './components/dashboard/side-menu/side-menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatCheckboxModule, MatSidenav, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule} from '@angular/material';
import { SolicitudesComponent } from './components/dashboard/solicitudes/solicitudes.component';
import { PedidosComponent } from './components/dashboard/pedidos/pedidos.component';
import { CompletadosComponent } from './components/dashboard/completados/completados.component';
import { MapBoxComponent } from './components/dashboard/map-box/map-box.component';
import { FormsModule } from '@angular/forms';


import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent,
    SideMenuComponent,
    SolicitudesComponent,
    PedidosComponent,
    CompletadosComponent,
    MapBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
