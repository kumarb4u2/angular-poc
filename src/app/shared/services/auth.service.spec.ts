import { TestBed } from "@angular/core/testing";

import { AuthService } from "./auth.service";
import { HttpClient } from "@angular/common/http";

describe("AuthService", () => {
  let httpClientStub: Partial<HttpClient> = {};
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientStub }],
    })
  );

  it("should be created", () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
