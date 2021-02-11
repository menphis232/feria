import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private router: Router,
    public authService: AuthService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    const token: string = this.authService.getJwToken();

    let request = null;

    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });
    }

    // SHOW CUSTOM LOADER

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401 || err.status === 403) {
          this.router.navigateByUrl('/login');
        }
        return throwError(err);
      }),
      finalize(() => {
        // CLOSE CUSTOM LOADER
      })
    );
  }

  private setCurrentHotel(req: HttpRequest<any>, name: string, value: string) {
    switch(req.method.toLowerCase()) {
      case 'post': case 'put':
        if (req.body instanceof FormData) {
          return req.clone({ body: req.body.append(name, value) })
        } else {
          const foo = {}; foo[name] = value;
          return req.clone({ body: {...req.body, ...foo} })
        }
      case 'get': default:
        return req.clone({
          params: req.params.set(name, value)
        });
    }
  }

}