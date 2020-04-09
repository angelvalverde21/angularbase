import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistroComponent } from './web/registro/registro.component';
import { HomeComponent } from './web/home/home.component';
import { LoginComponent } from './web/login/login.component';
import { DashComponent } from './erp/dash/dash.component';
import { ProductosComponent } from './erp/productos/productos.component';
import { NavbarComponent } from './erp/shared/navbar/navbar.component';
import { ErpbaseComponent } from './erp/erpbase/erpbase.component';
import { Page404Component } from './erp/page404/page404.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { VentasComponent } from './erp/ventas/ventas.component';
import { ReportesComponent } from './erp/reportes/reportes.component';
import { ItemComponent } from './erp/item/item.component';
import { FotosComponent } from './erp/item/fotos/fotos.component';
import { DetallesComponent } from './erp/item/detalles/detalles.component';
import { StockComponent } from './erp/item/stock/stock.component';
import { NuevasfotosComponent } from './erp/item/nuevasfotos/nuevasfotos.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    DashComponent,
    ProductosComponent,
    NavbarComponent,
    ErpbaseComponent,
    Page404Component,
    LoadingComponent,
    VentasComponent,
    ReportesComponent,
    ItemComponent,
    FotosComponent,
    DetallesComponent,
    StockComponent,
    NuevasfotosComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
