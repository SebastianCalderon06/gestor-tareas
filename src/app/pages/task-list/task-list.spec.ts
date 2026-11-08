
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import {
  provideHttpClientTesting,
  HttpTestingController
} from '@angular/common/http/testing';

import { TaskList } from './task-list';

describe('TaskList', () => {
  let component: TaskList;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskList],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(TaskList);
    component = fixture.componentInstance;

    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter pending tasks', () => {
    component.tasks.set([
      { id: 1, title: 'Tarea pendiente', completed: false },
      { id: 2, title: 'Tarea completada', completed: true }
    ]);

    component.filter.set('pending');

    expect(component.filteredTasks().length).toBe(1);
    expect(component.filteredTasks()[0].title).toBe('Tarea pendiente');
  });

  it('should filter completed tasks', () => {
    component.tasks.set([
      { id: 1, title: 'Tarea pendiente', completed: false },
      { id: 2, title: 'Tarea completada', completed: true }
    ]);

    component.filter.set('completed');

    expect(component.filteredTasks().length).toBe(1);
    expect(component.filteredTasks()[0].title).toBe('Tarea completada');
  });

  it('should add a new task', () => {
    component.newTask.set('Estudiar Angular');

    component.addTask();

    const request = httpMock.expectOne(
      'https://dummyjson.com/todos/add'
    );

    expect(request.request.method).toBe('POST');

    request.flush({
      id: 999,
      todo: 'Estudiar Angular',
      completed: false,
      userId: 1
    });

    expect(component.tasks().length).toBe(1);
    expect(component.tasks()[0].title).toBe('Estudiar Angular');
  });
});
