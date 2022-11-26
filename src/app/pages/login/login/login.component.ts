import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyServiceService } from 'src/app/services/spotify-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private spotifyServiceService: SpotifyServiceService,
    private router: Router
  ) {}

  public openLoginPage = () => {
    window.location.href = this.spotifyServiceService.obtainLoginUrl();
  };

  public verifyTokenInTheURl = () => {
    const token: string = this.spotifyServiceService.obtainTokenUrlCallBack();
    if (!!token) {
      this.spotifyServiceService.defineAccessToken(token);
      this.router.navigate(['/player']);
    } 
  };

  ngOnInit(): void {
    this.verifyTokenInTheURl();
  }
}
