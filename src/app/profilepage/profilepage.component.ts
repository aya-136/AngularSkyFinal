import { Component } from '@angular/core';
import { CardComponent } from "../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { VacationRequestsComponent } from '../vacation-requests/vacation-requests.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { HistoryComponent } from './history/history.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'profilepage',
  standalone: true,
  imports: [CardComponent, DatePipe, VacationRequestsComponent, ProfileCardComponent, HistoryComponent, RouterLink],
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.css'
})
export class ProfilepageComponent {
  pageName = 'Pending';
  displayStart = 0;
  displayLimit = 3;
}
