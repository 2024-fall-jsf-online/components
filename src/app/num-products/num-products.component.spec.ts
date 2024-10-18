import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumProductsComponent } from './num-products.component';

describe('NumProductsComponent', () => {
  let component: NumProductsComponent;
  let fixture: ComponentFixture<NumProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
