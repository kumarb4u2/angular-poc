import { TestBed } from "@angular/core/testing";

import { CartService } from "./cart.service";

fdescribe("CartService", () => {
  let service: CartService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(CartService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should have initial count 0", () => {
    expect(service.amount).toBe(0);
    expect(service.count).toBe(0);
  });
  it("should set cartItems properly", () => {
    const item = { id: 1, name: "string", price: 12, qty: 2 };
    service.cartItems = [item];
    expect(service.cartItems[0]).toEqual(item);
  });
  it("should remove item by id if removeItems is called with id", () => {
    const items = [
      { id: 1, name: "string", price: 12, qty: 2 },
      { id: 2, name: "string", price: 12, qty: 2 },
      { id: 3, name: "string", price: 12, qty: 2 },
    ];
    service.cartItems = items;
    service.removeItem(2);
    const index = service.cartItems.findIndex((item) => item.id === 2);
    expect(service.cartItems.length).toBe(2);
    expect(index).toBe(-1);
  });
  it("should empty the list if empty method is called", () => {
    const items = [
      { id: 1, name: "string", price: 12, qty: 2 },
      { id: 2, name: "string", price: 12, qty: 2 },
      { id: 3, name: "string", price: 12, qty: 2 },
    ];
    service.cartItems = items;
    service.empty();
    expect(service.cartItems.length).toBe(0);
  });
});
