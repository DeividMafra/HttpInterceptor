import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as data from './data.json'

const PRODUCT_URL = "http://localhost:3000/products";

@Injectable()
export class MockHtterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url === PRODUCT_URL) {
      console.log('from JSON>>> ', request.url);
      return of(new HttpResponse({
        status: 200,
        body: ((data) as any).default
      }))
    }
    return next.handle(request);
  }
}
