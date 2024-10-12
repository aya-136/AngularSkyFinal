import { Component, inject } from '@angular/core';
import { VacationRequestsComponent } from "../vacation-requests/vacation-requests.component";
import { VacationRequestService } from '../services/vacation-request.service';
@Component({
  selector: 'all-requests',
  standalone: true,
  imports: [VacationRequestsComponent],
  templateUrl: './all-requests.component.html',
  styleUrl: './all-requests.component.css'
})
export class AllRequestsComponent {
  pageName = 'Vacation'

  public vacationRequestsService = inject(VacationRequestService);

  toggleSelectAll() {
    this.vacationRequestsService.toggleSelectAll();
  }

}
