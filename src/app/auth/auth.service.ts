import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA7Owu0jd2sj5y6X9kYSPFLbkf8dgC15Qk',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((errorRes) => {
          let errorMessage = 'An uknown error ocurred!';
          if (!errorRes.error || !errorRes.error.error) {
            return throwError(() => new Error(errorMessage));
          }
          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'Email already exists!';
              break;
            case 'OPERATION_NOT_ALLOWED':
              errorMessage = 'This operation is not allowed!';
              break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
              errorMessage = 'Too many attempts, try again later!';
              break;
          }
          return throwError(() => new Error(errorMessage));
        })
      );
  }

  login(email: string, password: string) {
    this.http.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA7Owu0jd2sj5y6X9kYSPFLbkf8dgC15Qk',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
