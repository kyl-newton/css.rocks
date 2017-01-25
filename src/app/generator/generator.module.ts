import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BorderRadiusComponent} from './border-radius/border-radius.component';
import {GeneratorComponent} from "./generator.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import { EditorComponent } from './editor/editor.component';

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
        RouterModule.forRoot(appRoutes),
        SharedModule
    ],
    declarations: [GeneratorComponent, BorderRadiusComponent, EditorComponent],
    exports: [GeneratorComponent]
})
export class GeneratorModule {
}
