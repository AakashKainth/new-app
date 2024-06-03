import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  public name = "";

  // myEvent(){
  //   //alert('Welcome to Angular');
  //   //console.log('Welcome to Angular')
  //   this.name = "Learning never Ends";
  // }

  // myEvent(name:string, age:number){
  //   alert(name + " " + age);
  // }

  // myEvent(event:any){
  //   console.log(event);
  //   // console.log(event.type);
  // }

  myEvent(){
    console.log("Hello");
    // console.log(event.type);
  }
}
