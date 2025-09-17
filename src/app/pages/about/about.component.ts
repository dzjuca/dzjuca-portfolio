import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { StatsComponent } from '../home/components/stats/stats.component';


@Component({
  selector: 'app-about',
  imports: [TranslateModule, StatsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
