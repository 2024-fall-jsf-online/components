import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsAdditionComponent } from './ts-addition.component';

describe('TsAdditionComponent', () => {
  let component: TsAdditionComponent;
  let fixture: ComponentFixture<TsAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TsAdditionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
