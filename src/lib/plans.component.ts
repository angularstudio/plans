import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plan }                                   from './plan';
import { Plans }                                  from './plans';

@Component({

    selector: 'plans',

    template: `

        <div class="wrapper"
             [class.mat-elevation-z6]="config.shadow"
             [style.background-color]="config.backgroundColor"
             [style.background-image]="config.backgroundImage">

            <div class="top">

                <div class="title"
                     [style.color]="config.titleFontColor"
                     [style.font-size]="config.titleFontSize">{{ config.title }}</div>

                <div class="description"
                     [style.color]="config.descriptionFontColor"
                     [style.font-size]="config.descriptionFontSize">{{ config.description }}</div>

            </div>

            <div class="plans" matRipple>

                <div *ngFor="let plan of config.plans"
                     [style.border-color]="plan.borderColor"
                     [style.background-color]="plan.backgroundColor"
                     [class.mat-elevation-z6]="config.shadow"
                     (click)="onPlanClick.emit(plan)"
                     class="plan">

                    <div class="icon" [style.background-color]="plan.iconBackgroundColor">

                        <i [class]="plan.iconClass"
                           [style.color]="plan.iconFontColor"></i>

                    </div>

                    <div class="title" [style.color]="plan.titleFontColor">{{ plan.title }}</div>

                    <div class="price" [style.color]="plan.priceFontColor">

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

                    <div *ngIf="plan.button" class="button">

                        <button [style.background-color]="plan.buttonBackgroundColor"
                                mat-raised-button>

                            {{ plan.button }}

                        </button>

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

    @Output() public onPlanClick: EventEmitter<Plan> = new EventEmitter();

}
