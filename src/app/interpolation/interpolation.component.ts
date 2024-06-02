import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
  public name = "Aakash";
  public age=20;
  public url = window.location.href;
  helloMessgae(){
    return "Hello Aakash"
  }

    

}
