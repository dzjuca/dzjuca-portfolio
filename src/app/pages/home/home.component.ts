import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core'; // <-- Importa esto
import { StatsComponent } from './components/stats/stats.component'; // <-- Importa el nuevo componente

@Component({
  selector: 'app-home',
  imports: [RouterModule, TranslateModule, StatsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
