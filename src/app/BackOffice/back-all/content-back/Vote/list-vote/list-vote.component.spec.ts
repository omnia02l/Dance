import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVoteComponent } from './list-vote.component';

describe('ListVoteComponent', () => {
  let component: ListVoteComponent;
  let fixture: ComponentFixture<ListVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
