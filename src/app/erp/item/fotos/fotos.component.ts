import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../../servicios/productos.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {


  fotos : any = []; 
  loading: boolean = true;

  constructor(
    private router: ActivatedRoute, 
    private _producto: ProductosService
  ) {

    this.router.parent.params.subscribe( params => {
      console.log(params);
      this._producto.getStock(params['id'])
      .subscribe ( (data: any) => {
        console.log('inicio detalles');
        
        
        console.log(data['data'][0]);
        this.fotos = data['data'][0];
        this.loading   = false;
        //console.log(this.item);
      });

      //console.log(params['id']);
    });

   }

  ngOnInit() {
  }

}
