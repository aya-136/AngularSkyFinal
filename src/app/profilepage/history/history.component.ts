import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { vacationHistoryService } from '../../services/vacation-history.service';
import { VacationHistory } from '../../models/vacation-history.model';
@Component({
  selector: 'profile-history',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  vacationHistory: VacationHistory[] = []

  private historyService = inject(vacationHistoryService);

  ngOnInit(): void {
    this.historyService.fetchVacationHistory().subscribe(requests => {
      this.vacationHistory = requests;
    });
  }
}
