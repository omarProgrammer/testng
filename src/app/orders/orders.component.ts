import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  // Méthode pour faire la deconnexion
  deconnect() {
    localStorage.clear();
    this.router.navigate(['connexion']);

  }
}
