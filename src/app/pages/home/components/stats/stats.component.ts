import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'; // <-- 1. Importa el módulo

@Component({
  selector: 'app-stats',
  imports: [TranslateModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {

}
