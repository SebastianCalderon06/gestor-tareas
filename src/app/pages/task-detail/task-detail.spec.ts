import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TaskDetail } from './task-detail';

describe('TaskDetail', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDetail],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TaskDetail);
    expect(fixture.componentInstance).toBeTruthy();
  });
});