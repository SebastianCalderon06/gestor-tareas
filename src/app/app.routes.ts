import { Routes } from '@angular/router';
import { TaskList } from './pages/task-list/task-list';
import { TaskDetail } from './pages/task-detail/task-detail';

export const routes: Routes = [
  {
    path: 'tasks/:id',
    component: TaskDetail
  },
  {
    path: '',
    component: TaskList,
    pathMatch: 'full'
  }
];