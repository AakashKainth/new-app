import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-style-binding',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.css'
})
export class StyleBindingComponent {
  public condition = false;
  myStyles = {
    'color':'red',
    'fontFamily':'cooper',
    'font-size':'45px'
  }
}
