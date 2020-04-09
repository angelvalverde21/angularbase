import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './web/home/home.component';
import { RegistroComponent } from './web/registro/registro.component';
import { LoginComponent } from './web/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DashComponent } from './erp/dash/dash.component';
import { ProductosComponent } from './erp/productos/productos.component';
import { ErpbaseComponent } from './erp/erpbase/erpbase.component';
import { Page404Component } from './erp/page404/page404.component';
import { VentasComponent } from './erp/ventas/ventas.component';
import { ReportesComponent } from './erp/reportes/reportes.component';
import { ItemComponent } from './erp/item/item.component';
import { FotosComponent } from './erp/item/fotos/fotos.component';
import { DetallesComponent } from './erp/item/detalles/detalles.component';
import { StockComponent } from './erp/item/stock/stock.component';
import { NuevasfotosComponent } from './erp/item/nuevasfotos/nuevasfotos.component';

const routes: Routes = [
  //{ path: 'erp/productos', component: ProductosComponent, canActivate: [ AuthGuard], },

  { path: 'erp', 
    component: ErpbaseComponent, 
    canActivate: [ AuthGuard ], 
    children: [
      { path: 'item/:id', component: ItemComponent, 
        children: [
          { path: 'fotos', component: FotosComponent, 
            children : [
              { path: 'nuevo', component: NuevasfotosComponent },     
            ] },
          { path: 'detalles', component: DetallesComponent },
          { path: 'stock', component: StockComponent },
          { path: '**', component: DetallesComponent}
      ] },
      { path: 'dash', component: DashComponent },
      { path: 'ventas', component: VentasComponent },
      { path: 'reportes', component: ReportesComponent },
      { path: 'productos', component: ProductosComponent },
      { path: '',   redirectTo: 'dash', pathMatch: 'full' },
      { path: '**', component: Page404Component}
  
  ] },

  //{ path: 'erp/dash', component: DashComponent, canActivate: [ AuthGuard] },
  { path: 'home'    , component: HomeComponent},
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
