import {Component, Input, OnInit} from '@angular/core';
import {PlanetDetails} from '../../models/planet';
import {PlanetService} from '../../services/planet.service';
import {Resident} from '../../models/residents';
import {Film} from '../../models/films';

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
        window.scroll(0, 0);
    }

}
