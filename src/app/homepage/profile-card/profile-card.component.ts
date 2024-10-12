import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'home-profile-card',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CardComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  userName: string = 'Ahmad Azmi';
  userRole: string = 'Junior Accounting Officer';
  reportingManager: string = 'Salwa Assem';
  corporateLevel: string = "Level 10";
  imageUrl: string = '/users/AhmadAzmi.jpeg';
}
