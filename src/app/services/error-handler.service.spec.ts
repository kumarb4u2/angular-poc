import { TestBed } from "@angular/core/testing";

import { ErrorHandlerService } from "./error-handler.service";
import { HttpClient } from "@angular/common/http";

describe("ErrorHandlerService", () => {
  let httpClientStub: Partial<HttpClient> = {};
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientStub }],
    })
  );

  it("should be created", () => {
    const service: ErrorHandlerService = TestBed.get(ErrorHandlerService);
    expect(service).toBeTruthy();
  });
});
