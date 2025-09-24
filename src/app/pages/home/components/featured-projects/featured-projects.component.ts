import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

import { Project } from '../../../../models/project.model'; // <-- Importa el modelo
import { ProjectCardComponent } from '../../../../shared/components/project-card/project-card.component'; // <-- Importa el nuevo componente


@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, ProjectCardComponent],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss'
})
export class FeaturedProjectsComponent {

    // Array con la información de los proyectos
  public projects: Project[] = [
    {
      image: 'assets/images/project-1.jpg',
      categoryKey: 'HOME.FEATURED_PROJECTS.CATEGORY_WEB',
      titleKey: 'HOME.FEATURED_PROJECTS.PROJECT_1_TITLE',
      link: '/projects/ecommerce-platform',
      category: 'web'
    },
    {
      image: 'assets/images/project-2.jpg',
      categoryKey: 'HOME.FEATURED_PROJECTS.CATEGORY_SIMULATION',
      titleKey: 'HOME.FEATURED_PROJECTS.PROJECT_2_TITLE',
      link: '/projects/chemical-reactor',
      category: 'simulation'
    },
    {
      image: 'assets/images/project-3.jpg',
      categoryKey: 'HOME.FEATURED_PROJECTS.CATEGORY_DATA',
      titleKey: 'HOME.FEATURED_PROJECTS.PROJECT_3_TITLE',
      link: '/projects/sales-dashboard',
      category: 'data'
    },
    {
      image: 'assets/images/project-4.jpg',
      categoryKey: 'HOME.FEATURED_PROJECTS.CATEGORY_WEB',
      titleKey: 'HOME.FEATURED_PROJECTS.PROJECT_4_TITLE',
      link: '/projects/booking-app',
      category: 'web'
    }
  ];

}
