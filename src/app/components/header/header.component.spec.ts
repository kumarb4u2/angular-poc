import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderComponent } from "./header.component";
import { RouterTestingModule } from "@angular/router/testing";
import { CartService } from "src/app/cart/services/cart.service";
import { AuthService } from "src/app/shared/services/auth.service";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let cartServiceStub: Partial<CartService>;
  let authServiceStub: Partial<AuthService>;
  cartServiceStub = {};
  authServiceStub = {
    logout: jasmine.createSpy(),
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent],
      providers: [
        { provide: CartService, useValue: cartServiceStub },
        { provide: AuthService, useValue: authServiceStub },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should call logout of auth service ", () => {
    component.logout();
    expect(authServiceStub.logout).toHaveBeenCalled();
  });
});
