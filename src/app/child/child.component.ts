import { NgFor } from '@angular/common';
import { Component, Input  } from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgFor],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() myData: string = '';
  @Input() myDataArray: string[] = [];
  @Input() myDataObj: any = {};

}
