import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../app/components/login/sign-in/sign-in.component';
import { SignUpComponent } from '../app/components/login/sign-up/sign-up.component';
import {DashboardComponent} from '../app/components/dashboard/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../app/components/login/forgot-password/forgot-password.component';

import { VerifyEmailComponent } from '../app/components/login/verify-email/verify-email.component';


// Import canActivate guard services
import { AuthGuard } from '../app/shared/guard/auth.guard';
import { SecureInnerPagesGuard } from '../app/shared/guard/secure-inner-pages.guard';
import { SolicitudesComponent } from './components/dashboard/solicitudes/solicitudes.component';
import { PedidosComponent } from './components/dashboard/pedidos/pedidos.component';
import { CompletadosComponent } from './components/dashboard/completados/completados.component';
import { MapBoxComponent } from './components/dashboard/map-box/map-box.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: '', component: DashboardComponent, canActivate: [AuthGuard]  },
  {path: 'solicitudes', component: SolicitudesComponent, canActivate: [AuthGuard]},
  {path: 'pedidos', component: PedidosComponent, canActivate: [AuthGuard]},
  {path: 'completados', component: CompletadosComponent, canActivate: [AuthGuard]},
  {path: 'map', component: MapBoxComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
