import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apikey = 'AIzaSyCqcl7IP9sDxuqKMaKBE4JDwu7Es7l2kws';
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  userToken: string;
  
  constructor( private http: HttpClient) {
  
    this.lerrToken();

  }

  logout(){
    localStorage.removeItem('token');
  }


  login( usuario: UsuarioModel ){
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }

    return this.http.post(`${ this.url }:signInWithPassword?key=${ this.apikey }`,authData)                
      .pipe(
        map( resp => {
          console.log('entreo al map del rxjs');
          this.guardarToken( resp['idToken'] );
          return resp; 
        })
      );

  }


nuevoUsuario( usuario: UsuarioModel ){
    const authData = {
      email: usuario.email,
      password: usuario.password,
      nombre: usuario.nombre,
      returnSecureToken: true
    }

              return this.http.post(`${ this.url }:signUp?key=${ this.apikey }`,authData)
                .pipe(
                  map( resp => {
                    console.log('entreo al map del rxjs');
                    this.guardarToken( resp['idToken'] );
                    return resp; 
                  })
                );

}

  private guardarToken(idToken: string){
    this.userToken = idToken;
    localStorage.setItem('token',idToken);
  }

  lerrToken(){
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }

    return this.userToken;
  }
  

  estaAutenticado():boolean{
    return this.userToken.length > 2;
  }

}
