;
import { ProductComponent } from './components/products/product/product.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsComponent } from './components/products/products.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';

// Services
import { ProductService } from "./services/product.service";
@NgModule({
   declarations: [
      AppComponent,
      ProductsComponent,
      ProductsListComponent,
      ProductComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      ToastrModule.forRoot(),
      BrowserAnimationsModule
     
   ],
   providers: [
      ProductService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
