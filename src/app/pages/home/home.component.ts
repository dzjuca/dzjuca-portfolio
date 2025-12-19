import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core'; // <-- Importa esto
import { StatsComponent } from './components/stats/stats.component'; // <-- Importa el nuevo componente
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects.component'; // <-- Importa
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [RouterModule, TranslateModule, StatsComponent, FeaturedProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(public translate: TranslateService) { }

  get currentCvUrl(): string {
    // Si el idioma actual no existe, usamos 'es' por defecto
    const lang = this.translate.currentLang || 'es';
    return `assets/cv-${lang}.pdf`;
  }

}
