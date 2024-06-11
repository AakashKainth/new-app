import { JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  public channelName = "learning never ends";
  public name ="AAKASH";
  public person = {
    name: "Kumar",
    age: 23,
    height: 5.10
  }

}
