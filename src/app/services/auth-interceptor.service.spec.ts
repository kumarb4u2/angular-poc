import { TestBed } from "@angular/core/testing";

import { AuthInterceptorService } from "./auth-interceptor.service";
import { AuthService } from "../shared/services/auth.service";

describe("AuthInterceptorService", () => {
  let authServiceStub: Partial<AuthService> = {};
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: AuthService, useValue: authServiceStub }],
    })
  );

  it("should be created", () => {
    const service: AuthInterceptorService = TestBed.get(AuthInterceptorService);
    expect(service).toBeTruthy();
  });
});
