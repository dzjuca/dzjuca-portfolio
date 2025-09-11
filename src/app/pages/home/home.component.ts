import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core'; // <-- Importa esto
import { StatsComponent } from './components/stats/stats.component'; // <-- Importa el nuevo componente
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects.component'; // <-- Importa

@Component({
  selector: 'app-home',
  imports: [RouterModule, TranslateModule, StatsComponent, FeaturedProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
