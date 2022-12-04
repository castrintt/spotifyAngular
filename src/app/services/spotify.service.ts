import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js';
import IUser from '../interfaces/IUser';
import {
  SpotifyPlaylistTranslate,
  SpotifyTranslateUser,
} from '../common/spotifyHelper';
import IPlaylist from '../interfaces/IPlaylist';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  public spotify: Spotify.SpotifyWebApiJs;
  public user: IUser;
  private userId: string;

  constructor() {
    this.spotify = new Spotify();
  }
  public InitializeUser = async () => {
    if (!!this.user) return true;
    const token = localStorage.getItem('Token');
    if (!token) {
      return false;
    }
    try {
      this.defineAccessToken(token);
      this.obtainSpotifyUser();
      return !!this.user;
    } catch (ex) {
      return false;
    }
  };

  public obtainSpotifyUser = async () => {
    const userInfo = await this.spotify.getMe();
    this.user = SpotifyTranslateUser(userInfo);
    this.userId = userInfo.id;
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

  public searchUserPlaylist = async (
    offset = 0,
    limit = 50
  ): Promise<IPlaylist[]> => {
    const userPlaylists = await this.spotify.getUserPlaylists(this.userId, {
      limit,
      offset,
    });
    return userPlaylists.items.map(SpotifyPlaylistTranslate);
  };
}
