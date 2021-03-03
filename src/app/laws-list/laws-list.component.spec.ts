import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawsListComponent } from './laws-list.component';

describe('LawsListComponent', () => {
  let component: LawsListComponent;
  let fixture: ComponentFixture<LawsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
