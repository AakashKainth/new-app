import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-structure-directives',
  standalone: true,
  imports: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgFor],
  templateUrl: './structure-directives.component.html',
  styleUrl: './structure-directives.component.css'
})
export class StructureDirectivesComponent {

public fruits = ["Banana","Mango","Grapes"];
// public persons = [
//      {name:"Kumar", age:24, isMArried: true},
//      {name:"Zain", age:26, isMArried: false},
//      {name:"Aakash", age:21, isMArried: true}
//    ];

public persons = [
  {name:"Kumar", age:24, isMArried: true, hobbies:['Writing','Reding','Singing']},
  {name:"Zain", age:26, isMArried: false, hobbies:['Dancing','Sleeping','Singing']},
  {name:"Aakash", age:21, isMArried: true, hobbies:['Sports','Reding','Songs']}
];

  //public pizza = 'Supreme';

    // public display = false;
    // public fruit = 'Banana';
}
