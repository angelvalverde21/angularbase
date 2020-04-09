import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import Swal from 'sweetalert2';
// import { Router } from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any = [];
  loading: boolean = true;

  constructor( private _productos: ProductosService) {

    this._productos.getProductos()
    .subscribe ( (data: any) => {
      console.log(data['data']);
      this.productos = data['data'];
      this.loading   = false;
    });

  }

  ngOnInit() {

  }

}
