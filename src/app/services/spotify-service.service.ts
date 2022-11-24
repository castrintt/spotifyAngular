import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js';
import IUser from '../interfaces/IUser';
import { SpotifyTranslateUser } from '../common/spotifyHelper';

@Injectable({
  providedIn: 'root',
})
export class SpotifyServiceService {
  public spotify: Spotify.SpotifyWebApiJs;
  public user: IUser;
  constructor() {
    this.spotify = new Spotify();
  }
  public InitializeUser = async () => {
    if (!!this.user) return true;
    const token = localStorage.getItem('Token');
    if (!token) {
      return false;
    }
    return this.tryToInitializeUser(token);
  };
  private tryToInitializeUser = async (token: string) => {
    try {
      this.defineAccessToken(token);
      await this.obtainSpotifyUser();
      return !!this.user;
    } catch (ex) {
      return false;
    }
  };
  public obtainSpotifyUser = async () => {
    const userInfo = this.spotify.getMe();
    this.user = SpotifyTranslateUser(userInfo);
  };
  public obtainLoginUrl(): string {
    const authEndPoint: string = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId: string = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl: string = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes: string = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType: string = `response_type=token&show_dialog=true`;
    return authEndPoint + clientId + redirectUrl + scopes + responseType;
  }
  public obtainTokenUrlCallBack(): string {
    if (!window.location.hash) {
      return '';
    }
    const params: string[] = window.location.href.substring(1).split('&');
    return params[0].split('=')[1];
  }
  public defineAccessToken(token: string) {
    this.spotify.setAccessToken(token);
    localStorage.setItem('Token', token);
  }
}
