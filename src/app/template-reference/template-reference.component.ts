import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  standalone: true,
  imports: [],
  templateUrl: './template-reference.component.html',
  styleUrl: './template-reference.component.css'
})
export class TemplateReferenceComponent {


  public displayName = "";

  // getHeading(value:string) {
  //   console.log(value);
  // }

  getName(fName:string, lName:string) {
    this.displayName= fName + " " + lName;
    //console.log(value);
  }

  // getName(value:any) {
  //   this.displayName=value;
  //   console.log(value);
  // }

  // getName(value:string) {
  //   this.displayName=value;
  // }

  //  getName(value:string) {
  //    console.log(value);
  //  }

}
