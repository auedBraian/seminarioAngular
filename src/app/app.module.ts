import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FormsModule } from '@angular/forms';
import { AcampandoAboutComponent } from './acampando-about/acampando-about.component';
import { AcampandoProductsComponent } from './acampando-products/acampando-products.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { FooterComponent } from './footer/footer.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { PaymentComponent } from './payment/payment.component';
import { TrakingComponent } from './traking/traking.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    AcampandoAboutComponent,
    AcampandoProductsComponent,
    CartComponent,
    InputIntegerComponent,
    FooterComponent,
    ContactenosComponent,
    PaymentComponent,
    TrakingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
