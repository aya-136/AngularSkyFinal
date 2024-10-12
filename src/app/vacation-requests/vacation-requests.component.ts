import { Component, OnInit, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { VacationRequestService } from '../services/vacation-request.service';
import { VacationRequest } from '../models/vacation-request.model';
import { PagerComponent } from '../pager/pager.component';
import { CardComponent } from "../shared/card/card.component";
import { SlicePipe } from '@angular/common';
import { HighlighterPipe } from '../pipes/highlighter.pipe';

@Component({
  selector: 'vacation-requests',
  standalone: true,
  imports: [SlicePipe, RouterLink, CardComponent, FormsModule, HighlighterPipe, PagerComponent],
  templateUrl: './vacation-requests.component.html',
  styleUrl: './vacation-requests.component.css'
})
export class VacationRequestsComponent implements OnInit {
  searchTerm: string = '';

  @Input() pageName!: string;
  @Input() displayStart!: number;
  @Input() displayLimit!: number;
  @Input() showPendingOnly: boolean = false;
  @Input() showBtn!: boolean;
  @Input() showCurrent: boolean = false;
  @Input() showFilter: boolean = false;
  @Input() showPager!: boolean;

  vacationRequests: VacationRequest[] = [];
  filteredRequests: VacationRequest[] = [];
  private vacationRequestService = inject(VacationRequestService);
  selectAll = this.vacationRequestService.selectAll;
  page: number = 1;
  itemsPerPage: number = 9;
  totalItems: number = 0;

  ngOnInit(): void {
    this.vacationRequestService.fetchVacationRequests().subscribe(requests => {
      this.vacationRequests = requests;
      this.totalItems = requests.length;
      this.updateFilteredRequests();
    });
  }

  updateFilteredRequests(): void {
    let requestsToFilter = this.showPendingOnly
      ? this.vacationRequests.filter(req => req.pending)
      : this.vacationRequests.filter(req => !req.pending);

    this.filteredRequests = requestsToFilter.filter(request => {
      const nameMatch = request.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const salaryMatch = request.salary.toString().includes(this.searchTerm);
      const durationMatch = request.duration.toLowerCase().toString().includes(this.searchTerm);
      return nameMatch || salaryMatch || durationMatch;
    });
    this.totalItems = this.filteredRequests.length;
  }
  
  onPageChanged(newPage: number) {
    this.page = newPage;
  }

  get paginatedRequests() {
    const start = (this.page - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredRequests.slice(start, end);
  }

  toggleSelectAll() {
    this.vacationRequestService.toggleSelectAll();
  }
}
