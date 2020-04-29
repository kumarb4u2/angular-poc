import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AboutComponent } from "./about.component";
import { TableComponent } from "../table/table.component";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { HostTemplateDirective } from "src/app/directives/host-template.directive";

describe("AboutComponent", () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent, TableComponent, HostTemplateDirective],
    })
      .overrideModule(BrowserDynamicTestingModule, {
        set: { entryComponents: [TableComponent] },
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
