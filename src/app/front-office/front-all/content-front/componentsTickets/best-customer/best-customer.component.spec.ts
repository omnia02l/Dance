import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCustomerComponent } from './best-customer.component';

describe('BestCustomerComponent', () => {
  let component: BestCustomerComponent;
  let fixture: ComponentFixture<BestCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
