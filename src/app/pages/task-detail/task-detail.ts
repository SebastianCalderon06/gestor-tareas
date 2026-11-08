import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TaskService, Task } from '../../services/task';

@Component({
  selector: 'app-task-detail',
  imports: [RouterLink],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css',
})
export class TaskDetail implements OnInit {

  private route = inject(ActivatedRoute);
  private taskService = inject(TaskService);

  task = signal<Task | null>(null);
  loading = signal(false);
  error = signal('');

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!Number.isInteger(id) || id <= 0) {
      this.error.set('El identificador de la tarea no es válido.');
      return;
    }

    this.loading.set(true);

    this.taskService.getTaskById(id).subscribe({
      next: (data) => {
        this.task.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se pudo encontrar la tarea.');
        this.loading.set(false);
      }
    });
  }
}