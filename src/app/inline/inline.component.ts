import { Component } from '@angular/core';

@Component({
  selector: 'app-inline',
  standalone: true,
  imports: [],
  template: `<h2 id="title">Aakash</h2>`,
  styles: [`
    #title{
      color:green;
      font-size:35px;
    }
  `] 
})
export class InlineComponent {

}
