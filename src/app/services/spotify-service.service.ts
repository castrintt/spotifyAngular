import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpotifyServiceService {
  constructor() {}

  obtainLoginUrl() {
    const authEndPoint: string = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId: string = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl: string = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes: string = `scopes=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType: string = `response_type=token&show_dialog=true`;
    return authEndPoint + clientId + redirectUrl + scopes + responseType;
  }
}
