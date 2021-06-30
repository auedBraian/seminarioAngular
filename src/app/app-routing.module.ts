import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcampandoAboutComponent } from './acampando-about/acampando-about.component';
import { AcampandoProductsComponent } from './acampando-products/acampando-products.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { PaymentComponent } from './payment/payment.component';
import { TrakingComponent } from './traking/traking.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'products',
    pathMatch:'full'
  },
  {
    path:'products',
    component:AcampandoProductsComponent
  },
  {
    path:'about',
    component:AcampandoAboutComponent
  },
  {
    path:'contact',
    component:ContactenosComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },
  {
  path:'tracking',
  component:TrakingComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
