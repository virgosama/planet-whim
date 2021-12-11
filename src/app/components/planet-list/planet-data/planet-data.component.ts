import {Component, Input, Output, EventEmitter} from '@angular/core';
import {PlanetDetails} from '../../../models/planet';

@Component({
    selector: 'app-planet-data',
    templateUrl: './planet-data.component.html',
    styleUrls: ['./planet-data.component.scss']
})
export class PlanetDataComponent {
    @Output() scrollingFinished = new EventEmitter<void>();
    @Output() clickedPlanet = new EventEmitter();
    @Input() planets: Array<PlanetDetails> = [];

    constructor() {
    }

    onScrollingFinished(): void {
        this.scrollingFinished.emit();
    }

    onClickPlanet(planet: PlanetDetails): void {
        this.clickedPlanet.emit(planet);
    }
}
