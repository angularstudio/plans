import { CommonModule }   from '@angular/common';
import { NgModule }       from '@angular/core';
import { PlansComponent } from './plans.component';

@NgModule({
    declarations: [ PlansComponent ],
    imports: [

        CommonModule

    ],
    exports: [ PlansComponent ]
})
export class PlansModule {
}
