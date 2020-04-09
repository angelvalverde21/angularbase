import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item : any = []; 
  loading: boolean = true;

  constructor(
    private router: ActivatedRoute, 
    private _producto: ProductosService
  ) { 


    this.router.params.subscribe( params => {

      this._producto.getItem(params['id'])
      .subscribe ( (data: any) => {
        console.log(data['data'][0]);
        this.item = data['data'][0];
        this.loading   = false;
        //console.log(this.item);
      });

      //console.log(params['id']);
    });

  }

  ngOnInit() {
  }

}
