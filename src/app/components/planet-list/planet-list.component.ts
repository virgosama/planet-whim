import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {PlanetService} from '../../services/planet.service';
import {PlanetDetails} from '../../models/planet';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-planet-list',
    templateUrl: './planet-list.component.html',
    styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit, OnChanges {

    @Output() emitDetails = new EventEmitter();

    sendPlanetDetails: PlanetDetails;
    searchForm: FormGroup;
    nextPage = '';
    planetArrays: PlanetDetails[] = [];
    showPlanetList = true;

    constructor(private planetService: PlanetService,
                private formBuilder: FormBuilder) {
    }

    ngOnChanges(): void {
    }

    ngOnInit(): void {
        this.searchForm = this.formBuilder.group({
            planetName: ['']
        });
        this.getPlanetList();
    }

    showPlanetDetails(planet: PlanetDetails): void {
        this.sendPlanetDetails = planet;
        this.showPlanetList = false;
        console.log(planet);
    }

    onSearch(): void {
        this.planetService.searchPlanets(this.searchForm.get('planetName').value).subscribe(response => {
            this.nextPage = response.next;
            this.planetArrays = response.results;
        });
    }

    getPlanetList(): void {
        this.planetService.loadPlanets(this.nextPage).subscribe(response => {
            this.nextPage = response.next;
            this.planetArrays = this.planetArrays.concat(response.results);
        });
    }

    onScrollingFinished(): void {
        if (this.nextPage) {
            this.getPlanetList();
        }
    }
}
