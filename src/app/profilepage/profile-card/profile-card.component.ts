import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { EmployeeDetails } from '../../models/employee-details.model';
import { employeeDetailsService } from '../../services/employee-details.service';
@Component({
  selector: 'profile-profile-card',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent implements OnInit {

  employeeDetails!: EmployeeDetails ;
  
  private employeeService = inject(employeeDetailsService);

  ngOnInit(): void {
    this.employeeService.fetchEmployeeDetails().subscribe(detail => {
      this.employeeDetails = detail;
    });

  }
}
