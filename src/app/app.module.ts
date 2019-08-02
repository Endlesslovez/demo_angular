import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/component/header.component';
import { SidebarComponent } from './sidebar/component/sidebar.component';
import { HomeComponent } from './home/component/home.component';
import { ProductsComponent } from './products/component/products.component';
import { NewsletterComponent } from './newsletter/component/newsletter.component';
import { FooterComponent } from './footer/component/footer.component';
import { CategoryFeatureComponent } from './category-feature/component/category-feature.component';
import { ProductEditComponent } from './product-edit/component/product-edit.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ProductsComponent,
    NewsletterComponent,
    FooterComponent,
    CategoryFeatureComponent,
    ProductEditComponent,
    ProductAddComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
