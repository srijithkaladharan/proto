import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

import { AuthRequestData, AuthResponseData } from '../../models/auth-data-model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "http://localhost:3000/api/";

  private token: string;
  private tokenTimer: any;
  private userId: string;
  private authenticationStatusListener = new Subject<boolean>();
  private isAuthenticated: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: LocalStorageService
  ) { }


  //saves auth info into the local storage
  private saveAuthData(token: string, expirationDate: Date, user: { id: string, role: string, isAdmin: boolean }) {
    this.storage.store('token', token);
    this.storage.store('expiration', expirationDate.toISOString());
    this.storage.store('user', user);
  }

  //gets the auth info from the local storage
  private getAuthData() {
    const token = this.storage.retrieve('token');
    const expirationDate = this.storage.retrieve('expiration');
    const user = this.storage.retrieve('user');

    if (!token && !expirationDate && !user) {
      return;
    }
    return {
      token: token,
      expirationDate: expirationDate,
      user: user,
    };
  }

  //clears the auth info in the local storage
  private clearAuthData() {
    this.storage.clear('token');
    this.storage.clear('expiration');
    this.storage.clear('user');
  }

  //sets timeout for logout
  private setAuthTimer(duration: number) {
    console.log("Setting Timer : " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  login(email: string, password: string) {
    const authData: AuthRequestData = {
      email: email,
      password: password
    };

    console.log("Auth Data : ", authData);

    // this.http.post<AuthResponseData>(this.baseUrl + 'auth/login', authData)
    //   .subscribe(response => {
    //     const token = response.token;
    //     this.token = token;

    //     if (token) {
    //       const expiresInDuration = response.expiresIn;
    //       this.setAuthTimer(expiresInDuration);

    //       this.isAuthenticated = true;
    //       this.userId = response.user.id;
    //       this.authenticationStatusListener.next(true);

    //       const now = new Date();
    //       const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);

    //       let user = response.user;

    //       this.saveAuthData(token, expirationDate, user);
    //       this.router.navigate(['/hive']);
    //     }

    //   }, error => {
    //     this.authenticationStatusListener.next(false);
    //   });

    const token = "abcdefghxyz";
    const now = new Date();
    const expiresInDuration = 5;
    const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
    const user = {
      id: "user001",
      role: 'student',
      isAdmin: false
    };

    this.saveAuthData(token, expirationDate, user);
    this.router.navigate(['/hive']);

    const localData = this.getAuthData();
    console.log(localData);
  }


  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authenticationStatusListener.next(false);
    this.userId = null;

    clearTimeout(this.tokenTimer);

    this.clearAuthData();

    this.router.navigate(['/']);
  }

  autoAuth() {
    const authInfo = this.getAuthData();

    if (!authInfo) {
      return;
    }

    const now = new Date();
    const expiresIn = authInfo.expirationDate.getTime() - now.getTime();

    if (expiresIn > 0) {
      this.token = authInfo.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authenticationStatusListener.next(true);
    }
  }

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserId() {
    return this.userId;
  }

  getAuthStatusListener() {
    return this.authenticationStatusListener.asObservable();
  }
}

