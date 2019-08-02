import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryFeatureComponent } from './category-feature/category-feature.component';
import { ProductsComponent } from './products/listing/products.component';
import { ProductEditComponent } from './products/edit/product-edit.component';
import { ProductAddComponent } from './products/add/product-add.component';
import { ProductDetailComponent } from './products/detail/product-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    NewsletterComponent,
    FooterComponent,
    CategoryFeatureComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDetailComponent,
    ContactComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
