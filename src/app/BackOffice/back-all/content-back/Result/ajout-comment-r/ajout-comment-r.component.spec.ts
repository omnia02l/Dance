import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCommentRComponent } from './ajout-comment-r.component';

describe('AjoutCommentRComponent', () => {
  let component: AjoutCommentRComponent;
  let fixture: ComponentFixture<AjoutCommentRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCommentRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutCommentRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
