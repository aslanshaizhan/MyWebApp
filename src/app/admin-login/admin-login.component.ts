import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AdminService} from '../services/admin.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  logout(){
    this.adminService.logout();
    this.router.navigateByUrl('/admin');
  }

}
