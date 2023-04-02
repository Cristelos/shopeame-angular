import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductosPageComponent } from './pages/productos-page/productos-page.component';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';

const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "productos", component: ProductosPageComponent
  },
  {
    path: "gestion", component: GestionPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
