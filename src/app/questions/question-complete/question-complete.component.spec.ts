import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCompleteComponent } from './question-complete.component';

describe('QuestionCompleteComponent', () => {
  let component: QuestionCompleteComponent;
  let fixture: ComponentFixture<QuestionCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
