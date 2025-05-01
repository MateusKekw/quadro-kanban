import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})

export class KanbanComponent {

  saveTasksToLocalStorage() {
    if (typeof window !== 'undefined') {
    localStorage.setItem('kanbanTasks', JSON.stringify(this.tasks));
    }
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('kanbanTasks');
      if (saved) {
        this.tasks = JSON.parse(saved);
      }
    }
  }

  columns = [
    { status: 'Aberto', title: 'Aberto' },
    { status: 'Andamento', title: 'Em Andamento' },
    { status: 'Concluido', title: 'Concluído' },
    { status: 'Done', title: 'Done Done' }
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
      this.filteredTasks = [];
      this.draggedTask = null;
      this.saveTasksToLocalStorage();
    }
  }

  newTask = {
    title: '',
    description: '',
    priority: 'Média',
  };
  
  tasks: any[] = []; // Aqui ficarão as tarefas
  filteredTasks: any[] = [];
  searchTerm = '';
  
  addTask() {
    console.log("Botão clicado!", this.newTask);
    if (!this.newTask.title || !this.newTask.description) return;
    const task = {
      ...this.newTask,
      status: 'Aberto'
    };
    this.tasks.push(task);
    this.filteredTasks = [];
    this.newTask = { title: '', description: '', priority: 'Média' };
    this.saveTasksToLocalStorage();
  }
  
  countTasks(status: string): number {
    const base = this.filteredTasks.length ? this.filteredTasks : this.tasks;
    return base.filter(task => task.status === status).length;
  }
  
  searchTasks() {
    this.filteredTasks = this.tasks.filter(task =>
      task.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  
  getTasksByStatus(status: string) {
    const base = this.filteredTasks.length ? this.filteredTasks : this.tasks;
    return base.filter(task => task.status === status);
  }

}
