import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
// Méthode pour faire la deconnexion
  deconnect() {
    localStorage.clear();
    this.router.navigate(['connexion']);

  }
}
