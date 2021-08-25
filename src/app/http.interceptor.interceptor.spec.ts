import { TestBed } from '@angular/core/testing';

import { Http.InterceptorInterceptor } from './http.interceptor.interceptor';

describe('Http.InterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Http.InterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: Http.InterceptorInterceptor = TestBed.inject(Http.InterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
