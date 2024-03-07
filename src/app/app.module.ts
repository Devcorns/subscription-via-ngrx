import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductGridComponent } from './comp/product-grid/product-grid.component';
import { NavComponent } from './common/nav/nav.component';
import { FooterComponent } from './common/footer/footer.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { StoreModule } from '@ngrx/store';
import { food_reducer } from './store/app.reducer';



@NgModule({
  declarations: [
    AppComponent,
    ProductGridComponent,
    NavComponent,
    FooterComponent,
    WebsiteLayoutComponent,
    LoginLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({food:food_reducer})
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
