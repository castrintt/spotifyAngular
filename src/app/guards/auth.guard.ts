import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyServiceService } from '../services/spotify-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(
    private router: Router,
    private spotifyService: SpotifyServiceService
  ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = localStorage.getItem('Token');
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    this.verifyIfUserWasCreated();
    return true;
  }

  private verifyIfUserWasCreated = async (): Promise<any> => {
    return new Promise((response) => {
      const userCreated = this.spotifyService.InitializeUser();
      if (userCreated) {
        response(true);
      } else {
        response(this.notAuthenticated());
      }
    });
  };
  notAuthenticated() {
    localStorage.clear();
    this.router.navigate(['/login']);
    return false;
  }
}
