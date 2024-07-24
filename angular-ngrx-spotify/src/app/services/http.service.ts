import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '@services/auth/auth.service';
import { firstValueFrom, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  accessToken$: string | null = null;
  accessTokenSubcription$: Subscription = new Subscription();

  constructor(private http: HttpClient, private authservice: AuthService) {
    this.accessTokenSubcription$ = this.authservice
      .getAcessToken()
      .subscribe((token) => {
        this.accessToken$ = token;
      });
  }

  async handleRequestError(err: any): Promise<any> {
    const accessTokenExpired = 'The access token expired';
    const accessTokenInvalid = 'Invalid access token';

    const { message } = err.error.error;

    switch (message) {
      case accessTokenExpired:
        return this.authservice.spotifyImplicitGrantLogin();
      case accessTokenInvalid:
        return this.authservice.spotifyImplicitGrantLogin();
      default:
        return await Promise.reject(err);
    }
  }

  async getQuery(query: string) {
    if (!this.accessToken$) return this.authservice.spotifyImplicitGrantLogin();

    const baseUrl = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken$}`,
    });
    const options = { headers };
    try {
      return await firstValueFrom(this.http.get<Promise<any>>(baseUrl, options));
    } catch (err) {
      await this.handleRequestError(err);
    }
  }

  ngOnDestroy() {
    this.accessTokenSubcription$.unsubscribe();
  }
}
