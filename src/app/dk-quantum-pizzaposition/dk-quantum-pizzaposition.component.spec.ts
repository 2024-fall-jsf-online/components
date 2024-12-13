import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DkQuantumPizzapositionComponent } from './dk-quantum-pizzaposition.component';

describe('DkQuantumPizzapositionComponent', () => {
  let component: DkQuantumPizzapositionComponent;
  let fixture: ComponentFixture<DkQuantumPizzapositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DkQuantumPizzapositionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DkQuantumPizzapositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
