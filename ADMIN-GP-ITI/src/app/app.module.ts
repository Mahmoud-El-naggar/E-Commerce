import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProductsComponent } from './components/Products/all-products/all-products.component';
import { AddAdminComponent } from './components/Add-Admin/add-admin/add-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllUsersComponent } from './components/Users/all-users/all-users.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { OrdersComponent } from './components/Orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    AllUsersComponent,
    AddAdminComponent,
    CategoryListComponent,
    OrdersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
