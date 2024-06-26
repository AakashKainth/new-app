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
import { StructureDirectivesComponent } from "./structure-directives/structure-directives.component";
import { ChildComponent } from "./child/child.component";
import { Child2Component } from "./child2/child2.component";
import { PipesComponent } from "./pipes/pipes.component";
import { CustomPipe } from "./pipes/custom.pipe";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserComponent, InlineComponent, InterpolationComponent, EventsComponent, BindingsComponent, 
      ClassBindingComponent, NgClassDirComponent, StyleBindingComponent, TemplateReferenceComponent, TwoWayBindingComponent, 
      FormsModule, StructureDirectivesComponent, ChildComponent, Child2Component, PipesComponent, CustomPipe]
})
export class AppComponent {
  title = 'Learning Never Ends';
public msg = '';

  // name= "Kajal"
  // fruits = ["Apple","Banana","Mango","Grapes"]
  // obj = {
  //   name: "Kumar",
  //   age: 24,
  //   isMarried: true
  // }

  // helloMessage(){
  //   return 'Hello Aakash'
  // }

  // changeData(){
  //   this.name = 'Aakash'
  // }
}
