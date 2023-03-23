import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/layout/content/contacto/contacto.component';
import { HomeComponent } from './components/layout/content/home/home.component';
import { ProductosComponent } from './components/layout/content/productos/productos.component';
import { SNComponent } from './components/layout/content/sn/sn.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "sn",
    component: SNComponent
  },
  {
    path: "productos",
    component: ProductosComponent
  },
  {
    path: "contacto",
    component: ContactoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
