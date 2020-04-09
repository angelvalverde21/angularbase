import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new UsuarioModel();
  recordarme: boolean = false;

  constructor( private auth: AuthService, private router: Router) { }

  ngOnInit() {


    if( localStorage.getItem('email') ) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }

  }

  login (form: NgForm){

    if ( form.invalid ) { return; }
    
    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere por favor...'
    });

    Swal.showLoading();

    console.log(form); 

    this.auth.login ( this.usuario )
      .subscribe( resp =>{
        
        console.log(resp);
        Swal.close();

        if( this.recordarme ) {
          localStorage.setItem('email', this.usuario.email);
        }

        this.router.navigateByUrl('/erp');

      }, (err)=>{
        console.log(err.error.error.message);
        Swal.fire({
          text: 'Ha ocurrido un error al autenticar'
        });
      }); 
    //console.log(form);
  }

}
