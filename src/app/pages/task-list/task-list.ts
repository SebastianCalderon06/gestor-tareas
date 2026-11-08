import { Component, signal, OnInit, inject } from '@angular/core';
import { TaskService, Task } from '../../services/task';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports: [RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit {

  private taskService = inject(TaskService);

  tasks = signal<Task[]>([]);
  newTask = signal('');

  editTaskId = signal<number | null>(null);
  editTitle = signal('');

  filter = signal<'all' | 'pending' | 'completed'>('all');

  loading = signal(false);
  error = signal('');

  // Cargar tareas al iniciar el componente
  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.loading.set(true);
    this.error.set('');

    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se pudieron cargar las tareas.');
        this.loading.set(false);
      }
    });
  }

  // Agregar una tarea
  addTask() {
    const title = this.newTask().trim();

    if (title === '') {
      return;
    }

    this.taskService.addTask(title).subscribe({
      next: (task) => {
        this.tasks.update(current => [...current, task]);
        this.newTask.set('');
      },
      error: () => this.error.set('No se pudo agregar la tarea.')
    });
  }

  // Eliminar una tarea
  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.tasks.update(current =>
          current.filter(task => task.id !== id)
        );
      },
      error: () => this.error.set('No se pudo eliminar la tarea.')
    });
  }

  // Completar o descompletar una tarea
  toggleTask(id: number) {
    const task = this.tasks().find(item => item.id === id);

    if (!task) {
      return;
    }

    const updatedTask = {
      ...task,
      completed: !task.completed
    };

    this.taskService.updateTask(updatedTask).subscribe({
      next: (response) => {
        this.tasks.update(current =>
          current.map(item => item.id === id ? response : item)
        );
      },
      error: () => this.error.set('No se pudo actualizar la tarea.')
    });
  }

  // Iniciar edición
  startEdit(task: Task) {
    this.editTaskId.set(task.id);
    this.editTitle.set(task.title);
  }

  // Guardar edición
  saveEdit(id: number) {
    const title = this.editTitle().trim();

    if (title === '') {
      return;
    }

    const task = this.tasks().find(item => item.id === id);

    if (!task) {
      return;
    }

    const updatedTask = {
      ...task,
      title: title
    };

    this.taskService.updateTask(updatedTask).subscribe({
      next: (response) => {
        this.tasks.update(current =>
          current.map(item => item.id === id ? response : item)
        );

        this.cancelEdit();
      },
      error: () => this.error.set('No se pudo editar la tarea.')
    });
  }

  // Cancelar edición
  cancelEdit() {
    this.editTaskId.set(null);
    this.editTitle.set('');
  }

  // Filtrar tareas
  filteredTasks() {
    const currentFilter = this.filter();

    if (currentFilter === 'pending') {
      return this.tasks().filter(task => !task.completed);
    }

    if (currentFilter === 'completed') {
      return this.tasks().filter(task => task.completed);
    }

    return this.tasks();
  }
}