import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarProductosComponent } from './components/navbar/navbar.component';
import { CrearActualizarProductosComponent } from './components/crear-actualizar/crear-actualizar.component';
import { VistaGeneralProductosComponent } from './components/vista-general/vista-general.component';
import { VistaProductosComponent } from './components/vista/vista.component';
import { ReactiveFormsModule } from '@angular/forms';

import { PaginatorModule } from 'primeng/paginator';
import { ProductosRoutingModule } from './productos-routing.module';
import { TimeAgoPipe } from '../time-ago.pipe';

@NgModule({
  declarations: [
    TimeAgoPipe,
    NavbarProductosComponent,
    VistaGeneralProductosComponent,
    VistaProductosComponent,
    CrearActualizarProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule,
    PaginatorModule
  ]
})
export class ProductosModule { }
