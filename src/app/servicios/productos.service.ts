import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  private url = 'http://192.168.2.100/api/v1/public/productos/';
  private apikey = 'AIzaSyCqcl7IP9sDxuqKMaKBE4JDwu7Es7l2kws';
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor( private http: HttpClient) {
  
  }

  getProductos(){
    return this.http.get(this.url);
  }

  getItem(id: number ){
    return this.http.get(this.url + id);
    
  }

  getStock(id: number ){
    return this.http.get(this.url + id);
    
  }

  getFotos(id: number ){
    return this.http.get(this.url + id);
    
  }

}
