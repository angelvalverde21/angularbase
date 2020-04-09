import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../../servicios/productos.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stock : any = []; 
  loading: boolean = true;

 constructor(
    private router: ActivatedRoute, 
    private _producto: ProductosService
  ) {

    this.router.parent.params.subscribe( params => {
      console.log(params);
      this._producto.getItem(params['id'])
      .subscribe ( (data: any) => {
        console.log('inicio detalles');
        
        
        console.log(data['data'][0]);
        this.stock = data['data'][0];
        this.loading   = false;
        //console.log(this.item);
      });

      //console.log(params['id']);
    });

   }

  ngOnInit() {
  }

}
