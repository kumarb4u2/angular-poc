import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductListComponent } from "./product-list.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterTestingModule } from "@angular/router/testing";
import { ProductService } from "../../services/product.service";
import { CartService } from "src/app/cart/services/cart.service";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";

describe("ProductListComponent", () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productServiceStub: Partial<ProductService> = {
    getProducts: jasmine.createSpy(),
  };
  let cartServiceStub: Partial<CartService> = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, SharedModule, RouterTestingModule],
      declarations: [ProductListComponent],
      providers: [
        { provide: ProductService, useValue: productServiceStub },
        { provide: CartService, useValue: cartServiceStub },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                query: {
                  paramKey: "paramValue",
                },
              },
            },
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
