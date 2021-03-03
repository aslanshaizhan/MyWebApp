import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMixComponent } from './news-mix.component';

describe('NewsMixComponent', () => {
  let component: NewsMixComponent;
  let fixture: ComponentFixture<NewsMixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsMixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
