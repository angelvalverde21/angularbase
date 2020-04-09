import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  salir(){
    this.auth.logout();
    this.router.navigateByUrl('login');
    //this.router.navigate(['login']);
    return false;
  }
  
}
