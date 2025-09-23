import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from '../../models/project.model';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  public selectedCategory: string = 'all';
  public categories: string[] = ['all', 'web', 'simulation', 'data'];

  public allProjects: Project[] = [
    { image: 'assets/images/project-1.jpg', categoryKey: 'HOME.FEATURED_PROJECTS.CATEGORY_WEB', titleKey: 'HOME.FEATURED_PROJECTS.PROJECT_1_TITLE', link: '/projects/ecommerce-platform', category: 'web' },
    { image: 'assets/images/project-2.jpg', categoryKey: 'HOME.FEATURED_PROJECTS.CATEGORY_SIMULATION', titleKey: 'HOME.FEATURED_PROJECTS.PROJECT_2_TITLE', link: '/projects/chemical-reactor', category: 'simulation' },
    { image: 'assets/images/project-3.jpg', categoryKey: 'HOME.FEATURED_PROJECTS.CATEGORY_DATA', titleKey: 'HOME.FEATURED_PROJECTS.PROJECT_3_TITLE', link: '/projects/sales-dashboard', category: 'data' },
    { image: 'assets/images/project-4.jpg', categoryKey: 'HOME.FEATURED_PROJECTS.CATEGORY_WEB', titleKey: 'HOME.FEATURED_PROJECTS.PROJECT_4_TITLE', link: '/projects/booking-app', category: 'web' },
    // --- Añade más proyectos aquí para llenar la galería ---
    // --- Puedes añadir más proyectos aquí ---
    { image: 'assets/images/project-5.jpg', categoryKey: 'HOME.FEATURED_PROJECTS.CATEGORY_DATA', titleKey: 'HOME.FEATURED_PROJECTS.PROJECT_3_TITLE', link: '/projects/sales-dashboard-2', category: 'data' },
    { image: 'assets/images/project-6.jpg', categoryKey: 'HOME.FEATURED_PROJECTS.CATEGORY_WEB', titleKey: 'HOME.FEATURED_PROJECTS.PROJECT_1_TITLE', link: '/projects/ecommerce-platform-2', category: 'web' },
  ];

  public filteredProjects: Project[] = [];

  ngOnInit(): void {
    this.filterProjects('all');
  }

  filterProjects(category: string): void {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredProjects = this.allProjects;
    } else {
      this.filteredProjects = this.allProjects.filter(
        (project) => project.category === category
      );
    }
  }
}
