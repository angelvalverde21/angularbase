import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../servicios/auth.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  usuario: UsuarioModel;
  recordarme: boolean = false;


  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() { 

    this.usuario = new UsuarioModel();

    //this.usuario.email = "angelvalverde21@gmail.com";

  }



  onSubmit( form: NgForm){

  if ( form.invalid ) { return; }

  Swal.fire({
    allowOutsideClick: false,
    text: 'Espere por favor...'
  });

  //  console.log(this.usuario); 
    console.log(form); 
    this.auth.nuevoUsuario ( this.usuario )
      .subscribe( data => {

        Swal.close();
        
        if( this.recordarme ) {
          localStorage.setItem('email', this.usuario.email);
        }
        
        this.router.navigateByUrl('/erp');

        console.log(data);
      }, (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          text: 'La cuenta ya existe...'
        });
      });

  }

}
