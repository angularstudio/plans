import { Component, Input } from '@angular/core';
import { Plans }            from './plans';

@Component({

    selector: 'plans',

    template: `

        <div class="wrapper"
             [style.background-image]="config.backgroundImage"
             [style.background-color]="config.backgroundColor">

            <div class="top">

                <div class="title"
                     [style.font-size]="config.titleFontSize">{{ config.title }}</div>

                <div class="description"
                     [style.font-size]="config.descriptionFontSize">{{ config.description }}</div>

            </div>

            <div class="plans">

                <div *ngFor="let plan of config.plans"
                     [style.border-color]="plan.borderColor"
                     [style.background-color]="plan.backgroundColor"
                     class="plan">

                    <div class="icon" [style.background-color]="plan.iconBackgroundColor">

                        <i [class]="plan.iconClass"
                           [style.color]="plan.iconFontColor"></i>

                    </div>

                    <div class="title">{{ plan.title }}</div>

                    <div class="price">

                        {{ plan.price }}

                        <span>{{ plan.unit }}</span>

                    </div>

                    <div class="details">

                        <div *ngFor="let detail of plan.details"
                             [style.font-size]="plan.detailsFontSize"
                             [style.color]="plan.detailsFontColor"
                             class="detail">

                            {{ detail }}

                        </div>

                    </div>

                </div>

            </div>

            <div *ngIf="config.footer"
                 [style.color]="config.footerFontColor"
                 [style.font-size]="config.footerFontSize"
                 class="footer">{{ config.footer }}</div>

        </div>

    `,

    styleUrls: [ 'plans.component.scss' ]

})
export class PlansComponent {

    @Input() public config: Plans;

}
