import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTvComponent } from './video-tv.component';

describe('VideoTvComponent', () => {
  let component: VideoTvComponent;
  let fixture: ComponentFixture<VideoTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
