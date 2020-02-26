import { StudioButton } from '@angular.studio/button';
import { Plan }         from './plan';

export class Plans {

    public backgroundImage?: string;
    public backgroundColor?: string = '#40439c';
    public buttonPrimary?: StudioButton;
    public description: string;
    public descriptionFontColor?: string;
    public descriptionFontSize?: string = '20px';
    public footer?: string;
    public footerFontColor?: string = '#333';
    public footerFontSize?: string = '13px';
    public plans: Array<Plan>;
    public shadow?: boolean;
    public title: string;
    public titleFontColor?: string;
    public titleFontSize?: string = '30px';

    public constructor(o: Plans) {

        Object.assign(this, o);

    }

}
