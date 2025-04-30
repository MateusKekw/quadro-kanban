import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent {
  columns = [
    { status: 'aberto', title: 'Aberto' },
    { status: 'andamento', title: 'Em Andamento' },
    { status: 'concluido', title: 'Concluído' },
    { status: 'done', title: 'Done Done' }
  ];

  tasks = [
    { id: 1, title: 'Tarefa A', status: 'aberto' },
    { id: 2, title: 'Tarefa B', status: 'aberto' },
    { id: 3, title: 'Tarefa C', status: 'andamento' },
    { id: 4, title: 'Tarefa D', status: 'concluido' },
    { id: 5, title: 'Tarefa E', status: 'done' }
  ];

  draggedTask: any = null;

  onDragStart(task: any) {
    this.draggedTask = task;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent, newStatus: string) {
    event.preventDefault();
    if (this.draggedTask) {
      this.draggedTask.status = newStatus;
      this.draggedTask = null;
    }
  }

  getTasksByStatus(status: string) {
    return this.tasks.filter(task => task.status === status);
  }

  
}
