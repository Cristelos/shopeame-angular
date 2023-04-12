import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductosPageComponent } from './pages/productos-page/productos-page.component';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MainComponent } from './shared/components/main/main.component';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from './pages/productos-page/producto/producto.component';
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'primeng/rating';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductosPageComponent,
    GestionPageComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
