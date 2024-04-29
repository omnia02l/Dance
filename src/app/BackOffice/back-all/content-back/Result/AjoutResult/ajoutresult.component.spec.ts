import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutresultComponent } from './ajoutresult.component';

describe('AjoutresultComponent', () => {
  let component: AjoutresultComponent;
  let fixture: ComponentFixture<AjoutresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
