import { Component, OnInit } from '@angular/core';
import { SpotifyServiceService } from 'src/app/services/spotify-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private spotifyServiceService: SpotifyServiceService) {}

  public openLoginPage = () => {
    window.location.href = this.spotifyServiceService.obtainLoginUrl();
  };

  public verifyTokenInTheURl = () => {
    const token: string = this.spotifyServiceService.obtainTokenUrlCallBack();
    if (!!token) {
      this.spotifyServiceService.defineAccessToken(token);
    }
  };

  ngOnInit(): void {
    this.verifyTokenInTheURl();
  }
}
