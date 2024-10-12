import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { VacationHistory } from "../models/vacation-history.model";
@Injectable({
    providedIn: 'root'
})

export class vacationHistoryService {
    private apiUrl = 'jsons/vacation-history.json';

    private http = inject(HttpClient);

    public fetchVacationHistory(): Observable<VacationHistory[]> {
        return this.http.get<VacationHistory[]>(this.apiUrl).pipe(
            catchError(error => {
                console.error('Error fetching vacation history:', error);
                return of([]);
            })
        );
    }
}