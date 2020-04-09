import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../../servicios/productos.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  item : any = []; 
  loading: boolean = true;
  imgload: boolean = false;

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
        this.item = data['data'][0];
        this.loading   = false;
        //console.log(this.item);
      });

      //console.log(params['id']);
    });

   }

   imagenCargada(name:any){
      console.log('imagen cargada');
      console.log(name);
      console.log(name.path[0].src);
      this.imgload = true;
   }

  ngOnInit() {
  }

}
