import { Component } from '@angular/core';

@Component({
  selector: '[app-user], .app-user, app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  public counter(str:string) {
    (str === 'add' ? this.value++ : this.value--);

  }

  public value:number = 0;
}
