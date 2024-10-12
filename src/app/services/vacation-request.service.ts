import { EventEmitter, inject, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { VacationRequest } from '../models/vacation-request.model';
@Injectable({
  providedIn: 'root'
})
export class VacationRequestService {
  selectAll: boolean = false;
  @Output() selectAllChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private apiUrl = 'jsons/vacation-requests.json';

  private http = inject(HttpClient) 

  public fetchVacationRequests(): Observable<VacationRequest[]> {
    return this.http.get<VacationRequest[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching vacation requests:', error);
        return of([]);
      })
    );
  }
  onSelectAllChange(value: boolean) {
    this.selectAll = value;
  }
  toggleSelectAll() {
    this.selectAll = !this.selectAll;
    this.selectAllChange.emit(this.selectAll);
  }
}
