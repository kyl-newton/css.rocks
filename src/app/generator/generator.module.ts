import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BorderRadiusComponent} from './border-radius/border-radius.component';
import {GeneratorComponent} from "./generator.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {
    path: 'generator',
    component: GeneratorComponent,
    children: [
      {
        path: 'border-radius',
        component: BorderRadiusComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [GeneratorComponent, BorderRadiusComponent],
  exports: [GeneratorComponent]
})
export class GeneratorModule {
}
