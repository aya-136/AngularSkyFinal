import { Component } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'home-carsoul',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './carsoul.component.html',
  styleUrl: './carsoul.component.css'
})
export class CarsoulComponent {
  image1Url = "carsoul-imgs/Coconut.jpg";
  image2Url = "carsoul-imgs/Coconut2.jpg";
}
