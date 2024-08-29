import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarProductosComponent } from './components/navbar/navbar.component';
import { VistaGeneralProductosComponent } from './components/vista-general/vista-general.component';
import { CrearActualizarProductosComponent } from './components/crear-actualizar/crear-actualizar.component';
import { VistaProductosComponent } from './components/vista/vista.component';

const routes: Routes = [
    {
        path: '', component: NavbarProductosComponent, children:
            [
            {path: 'vistaproductos', component: VistaGeneralProductosComponent},
            {path: 'createproductos', component: CrearActualizarProductosComponent},
            {path: 'verproductos/:id', component: VistaProductosComponent},
            {path: 'actualizarproductos/:id', component: CrearActualizarProductosComponent},
            {path: '**', redirectTo: 'vistaproductos'} 
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductosRoutingModule { }
