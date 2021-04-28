import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
// tslint:disable-next-line:import-spacing
import { Router } from  '@angular/router';
import {AdminService} from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router, private formBuilder: FormBuilder) { }

  adminForm!: FormGroup;
  isSubmitted  =  false;

  ngOnInit(): void {
    this.adminForm  =  this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  get formControls() { return this.adminForm.controls; }

  // tslint:disable-next-line:typedef
  login(){
    console.log(this.adminForm.value);
    this.isSubmitted = true;
    if (this.adminForm.invalid){
      return;
    }
    this.adminService.login(this.adminForm.value);
    this.router.navigateByUrl('/admin-login');
  }
}
