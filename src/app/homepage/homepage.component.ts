import { Component } from '@angular/core';
import { CarsoulComponent } from './carsoul/carsoul.component';
import { VacationRequestsComponent } from '../vacation-requests/vacation-requests.component';
import { HeaderComponent } from './header/header.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { SummaryCardsComponent } from './summary-cards/summary-cards.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CardComponent } from '../shared/card/card.component';
@Component({
  selector: 'homepage',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HeaderComponent, ProfileCardComponent, SummaryCardsComponent, CarsoulComponent, VacationRequestsComponent, CardComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  page = 'Vacation';
  displayStart = 0;
  displayLimit = 3;
}
