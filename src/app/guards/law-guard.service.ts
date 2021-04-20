import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {LawService} from '../services/law.service';

@Injectable()
export class LawGuardService implements CanActivate {
  private lawService: any;

  constructor(private router: Router,
              private lawService: LawService) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

    console.log('we are in canActivate method!');

    if (!this.lawService.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
