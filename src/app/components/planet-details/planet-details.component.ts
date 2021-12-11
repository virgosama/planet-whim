import {Component, Input, OnInit} from '@angular/core';
import {PlanetDetails} from '../../models/planet';

@Component({
    selector: 'app-planet-details',
    templateUrl: './planet-details.component.html',
    styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {

    @Input() planetDetails: PlanetDetails;

    constructor() {
    }

    ngOnInit(): void {
        console.log(this.planetDetails);
    }

}
