import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../service/config-service';
import {User} from '../model/user';
import {CustomerService} from '../service/customer-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  public idCustomer: any;
  user: User = new User();
  constructor(public config: ConfigService, public customerService: CustomerService, public router: Router) { }

  ngOnInit() {
  }
  getIdCustomer() {
    this.config.idCustmer = this.user.mdmcustid;
    this.customerService.getPersonalDat(this.user.mdmcustid)
      .subscribe(data => {
        if (data.length > 0) {
          console.log('ok');
          this.router.navigate(['personalData']);
        } else {
          alert('Pas d information sur le customer merci de se connecter avec un autre customer' );
          this.config.delateDataLoclaStorige();
        }
      });
    this.config.saveDataLoclaStorige();
  }
}
