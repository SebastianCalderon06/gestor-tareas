import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { TaskService } from './task';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TaskService,
        provideHttpClient()
      ]
    });

    service = TestBed.inject(TaskService);
  });

  it('debe crearse correctamente', () => {
    expect(service).toBeTruthy();
  });
});