import { Component, inject } from '@angular/core';
import { EmployeeDetails } from '../../models/employee-details.model';
import { employeeDetailsService } from '../../services/employee-details.service';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'home-summary-cards',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './summary-cards.component.html',
  styleUrl: './summary-cards.component.css'
})
export class SummaryCardsComponent {
  employeeDetails!: EmployeeDetails ;
  
  private employeeService = inject(employeeDetailsService);

  ngOnInit(): void {
    this.employeeService.fetchEmployeeDetails().subscribe(detail => {
      this.employeeDetails = detail;
    });
  }
}
