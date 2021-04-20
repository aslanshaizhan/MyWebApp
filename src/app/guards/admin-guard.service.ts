import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AdminService} from '../services/admin.service';

@Injectable()
export class AdminGuardService implements CanActivate {
  private adminService: any;

  constructor(private router: Router,
              private adminService: AdminService) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

    console.log('we are in canActivate method!');

    if (!this.adminService.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
