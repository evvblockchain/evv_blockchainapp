import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CheckinComponent } from './checkin/checkin.component';
import { ClientinfoComponent } from './clientinfo/clientinfo.component';
import { HistoryComponent } from './history/history.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      {
        path:'',
        component: CheckinComponent,
      },
      {
        path:'history',
        component: HistoryComponent,
      },
      {
        path:'checkout',
        component: CheckoutComponent,
      },
      {
        path:'verify/:imagePath',
        component: VerifyComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
