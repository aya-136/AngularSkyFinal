import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EmployeeDetails } from '../models/employee-details.model';

@Injectable({
  providedIn: 'root'
})

export class employeeDetailsService {
  private apiUrl = 'jsons/employee-details.json';

  private http = inject(HttpClient);

  public fetchEmployeeDetails(): Observable<EmployeeDetails> {
    return this.http.get<EmployeeDetails>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching employee details:', error);
        return of();
      })
    );
  }

}