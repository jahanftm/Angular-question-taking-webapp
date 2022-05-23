import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor() {
  }

  // @ts-ignore
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent |
    HttpHeaderResponse | HttpProgressEvent | HttpResponse<any>> {
    // All HTTP requests are going to go through this method
  }

}
