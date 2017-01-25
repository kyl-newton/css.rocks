import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {ButtonGroupComponent} from './button-group/button-group.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ButtonComponent, ButtonGroupComponent],
    exports: [ButtonComponent, ButtonGroupComponent]
})
export class SharedModule {
}
