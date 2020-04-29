import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductEditComponent } from "./product-edit.component";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { of } from "rxjs";

describe("ProductEditComponent", () => {
  let component: ProductEditComponent;
  let fixture: ComponentFixture<ProductEditComponent>;
  let productServiceStub: Partial<ProductService> = {
    getProduct: () =>
      of({ id: 23, name: "kumar", price: 23, year: 23, brandId: 23 }),
    getBrands: () => of([{ id: 1, name: "kumar" }]),
  };
  let routerStub: Partial<Router> = {};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ProductEditComponent],
      providers: [
        { provide: ProductService, useValue: productServiceStub },
        { provide: Router, useValue: routerStub },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                id: 23,
              },
            },
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
