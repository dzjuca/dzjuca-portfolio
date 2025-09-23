import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from '../../../models/project.model'; // Importamos nuestro modelo

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  // Usamos @Input() para que este componente pueda recibir datos desde fuera
  @Input({ required: true }) project!: Project;
}
