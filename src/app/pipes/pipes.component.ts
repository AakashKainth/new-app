import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe, PercentPipe, CurrencyPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  public channelName = "learning never ends";
  public name ="AAKASH";
  public myDate = new Date();
  months =["Jan", "Feb", "Mar", "Apr", "May", "Jun",
     "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
  public person = {
    name: "Kumar",
    age: 23,
    height: 5.10
  }
  

}
