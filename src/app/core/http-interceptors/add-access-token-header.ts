import { AmplifyService } from 'aws-amplify-angular';
import { Injectable, Injector, ErrorHandler } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { AuthClass } from 'aws-amplify';

/** Passes HttpErrorResponse to application-wide error handler */
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap({
        error: (err: any) => {
          if (err instanceof HttpErrorResponse) {
            const appErrorHandler = this.injector.get(ErrorHandler);
            appErrorHandler.handleError(err);
          }
        }
      })
    );
  }
}



/**
 * As the AWS Amplify SDK does not notify when the current access token expires
 * we have to check the current token on every HTTP call. This class
 * implements an HTTP request interceptor for the Angular HttpClient
 */
@Injectable()
export class AddAccessTokenToHttpHeader implements HttpInterceptor
{
    constructor(protected amplifyService: AmplifyService)
    {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        console.log(request)
        // Amplify AuthClass.currentSession() checks the
        // access token and refreshes it if required.         
        return (from((this.amplifyService.auth() as AuthClass).currentSession()).pipe(
            switchMap(cognito_session =>
            {
                let auth_header: string = 'Bearer ' + cognito_session.getAccessToken().getJwtToken()
                let new_request: HttpRequest<any> = request.clone({
                    setHeaders: {
                        Authorization: auth_header
                    }
                });

                return (next.handle(new_request));
            })
        ));
    }

}