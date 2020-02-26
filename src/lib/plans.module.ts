import { CommonModule }    from '@angular/common';
import { NgModule }        from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { PlansComponent }  from './plans.component';

@NgModule({

    declarations: [ PlansComponent ],
    imports: [

        CommonModule,
        MatButtonModule,
        MatRippleModule

    ],
    exports: [ PlansComponent ]

})
export class PlansModule {
}
