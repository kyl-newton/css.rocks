import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopBarComponent} from './top-bar/top-bar.component';
import {NavigationComponent} from './navigation/navigation.component';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [TopBarComponent, NavigationComponent],
    exports: [TopBarComponent, NavigationComponent]
})
export class CoreModule {
}
