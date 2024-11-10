import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.css',
})
export class AllProjectsComponent {
  // Emitir el proyecto seleccionado
  @Output() projectSelected = new EventEmitter<string>();

  // Método para emitir el evento
  selectProject(project: string) {
    this.projectSelected.emit(project);
  }
}
