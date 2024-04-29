import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeDislikeStatComponent } from './like-dislike-stat.component';

describe('LikeDislikeStatComponent', () => {
  let component: LikeDislikeStatComponent;
  let fixture: ComponentFixture<LikeDislikeStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeDislikeStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeDislikeStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
