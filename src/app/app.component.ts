import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { InlineComponent } from "./inline/inline.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserComponent, InlineComponent]
})
export class AppComponent {
  title = 'Learning Never Ends';
  name= "Aakash"
  helloMessage(){
    return 'Hello Aakash'
  }
}
