import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

// Definimos una interfaz para tipar nuestros proyectos
interface Project {
  image: string;
  categoryKey: string;
  titleKey: string;
  link: string;
}

@Component({
  selector: 'app-featured-projects',
  imports: [CommonModule, RouterModule, TranslateModule],
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
      link: '/projects/ecommerce-platform'
    },
    {
      image: 'assets/images/project-2.jpg',
      categoryKey: 'HOME.FEATURED_PROJECTS.CATEGORY_SIMULATION',
      titleKey: 'HOME.FEATURED_PROJECTS.PROJECT_2_TITLE',
      link: '/projects/chemical-reactor'
    },
    {
      image: 'assets/images/project-3.jpg',
      categoryKey: 'HOME.FEATURED_PROJECTS.CATEGORY_DATA',
      titleKey: 'HOME.FEATURED_PROJECTS.PROJECT_3_TITLE',
      link: '/projects/sales-dashboard'
    },
    {
      image: 'assets/images/project-4.jpg',
      categoryKey: 'HOME.FEATURED_PROJECTS.CATEGORY_WEB',
      titleKey: 'HOME.FEATURED_PROJECTS.PROJECT_4_TITLE',
      link: '/projects/booking-app'
    }
  ];

}
