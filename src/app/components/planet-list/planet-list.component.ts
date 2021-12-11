import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {PlanetService} from '../../services/planet.service';
import {PlanetDetails} from '../../models/planet';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-planet-list',
    templateUrl: './planet-list.component.html',
    styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {

    @Output() emitDetails = new EventEmitter();

    sendPlanetDetails: PlanetDetails;
    searchForm: FormGroup;
    nextPage = '';
    planetArrays: PlanetDetails[] = [];
    showPlanetList = true;
    endOfPage = false;

    constructor(private planetService: PlanetService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.searchForm = this.formBuilder.group({
            planetName: ['']
        });
        this.loadPlanetList();
    }

    showPlanetDetails(planet: PlanetDetails): void {
        this.sendPlanetDetails = planet;
        this.showPlanetList = false;
        this.endOfPage = false;
    }

    onSearch(): void {
        this.planetService.searchPlanets(this.searchForm.get('planetName').value).subscribe(response => {
            this.nextPage = response.next;
            this.planetArrays = response.results;
            this.endOfPage = false;
        });
    }

    loadPlanetList(): void {
        this.planetService.getPlanets(this.nextPage).subscribe(response => {
            this.nextPage = response.next;
            this.planetArrays = this.planetArrays.concat(response.results);
            this.endOfPage = false;
        });
    }

    onScrollingFinished(): void {
        if (this.nextPage) {
            this.loadPlanetList();
        } else {
            this.endOfPage = true;
        }
    }
}
