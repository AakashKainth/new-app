import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { InlineComponent } from "./inline/inline.component";
import { InterpolationComponent } from "./interpolation/interpolation.component";
import { EventsComponent } from "./events/events.component";
import { BindingsComponent } from "./bindings/bindings.component";
import { ClassBindingComponent } from "./class-binding/class-binding.component";
import { NgClassDirComponent } from "./ng-class-dir/ng-class-dir.component";
import { StyleBindingComponent } from "./style-binding/style-binding.component";
import { TemplateReferenceComponent } from "./template-reference/template-reference.component";
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserComponent, InlineComponent, InterpolationComponent, EventsComponent, BindingsComponent, ClassBindingComponent, NgClassDirComponent, StyleBindingComponent, TemplateReferenceComponent, TwoWayBindingComponent, FormsModule]
})
export class AppComponent {
  title = 'Learning Never Ends';
  name= "Aakash"
  helloMessage(){
    return 'Hello Aakash'
  }
}
