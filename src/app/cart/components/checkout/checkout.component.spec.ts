import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CheckoutComponent } from "./checkout.component";
import { ReactiveFormsModule, FormBuilder, FormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

xdescribe("CheckoutComponent", () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let routeStub: Partial<ActivatedRoute> = {};
  let httpStub: Partial<HttpClient> = { get: jasmine.createSpy() };
  let formBuilderStub: Partial<FormBuilder> = { group: jasmine.createSpy() };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CheckoutComponent],
      providers: [
        { provide: ActivatedRoute, useValue: routeStub },
        { provide: HttpClient, useValue: httpStub },
        { provide: FormBuilder, useValue: formBuilderStub },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
