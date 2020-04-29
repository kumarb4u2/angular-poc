import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { CounterComponent } from "./counter.component";
import { SharedModule } from "src/app/shared/shared.module";

describe("CounterComponent", () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, SharedModule],
      declarations: [CounterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should increase the counter value", () => {
    const e = new CustomEvent("build");
    component.increment(e);
    fixture.detectChanges();
    expect(component.counter).toBe(1);
  });

  it("should increment counter after 5 seconds", (done) => {
    setTimeout(() => {
      fixture.detectChanges();
      expect(component.counter).toBe(1);
      done();
    }, 5000);
  });
});
