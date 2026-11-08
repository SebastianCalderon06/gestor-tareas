import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

// Estructura de nuestras tareas
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// Estructura de respuesta de DummyJSON
interface ApiTask {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

interface ApiResponse {
  todos: ApiTask[];
  total: number;
  skip: number;
  limit: number;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private http = inject(HttpClient);

  private apiUrl = 'https://dummyjson.com/todos';

  // Obtener todas las tareas
  getTasks(): Observable<Task[]> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      map(response =>
        response.todos.map(task => ({
          id: task.id,
          title: task.todo,
          completed: task.completed
        }))
      )
    );
  }

  // Obtener una tarea por su identificador
getTaskById(id: number): Observable<Task> {
  return this.http.get<ApiTask>(`${this.apiUrl}/${id}`).pipe(
    map(task => ({
      id: task.id,
      title: task.todo,
      completed: task.completed
    }))
  );
}

  // Agregar una tarea
  addTask(title: string): Observable<Task> {
    return this.http.post<ApiTask>(`${this.apiUrl}/add`, {
      todo: title,
      completed: false,
      userId: 1
    }).pipe(
      map(task => ({
        id: task.id,
        title: task.todo,
        completed: task.completed
      }))
    );
  }

  // Actualizar una tarea
  updateTask(task: Task): Observable<Task> {
    return this.http.put<ApiTask>(`${this.apiUrl}/${task.id}`, {
      todo: task.title,
      completed: task.completed
    }).pipe(
      map(response => ({
        id: response.id,
        title: response.todo,
        completed: response.completed
      }))
    );
  }

  // Eliminar una tarea
  deleteTask(id: number): Observable<void> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      map(() => undefined)
    );
  }
}