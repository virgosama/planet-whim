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

    residentsList: Resident[] = [];
    filmList: Film[] = [];

    constructor(private planetService: PlanetService) {
    }

    ngOnInit(): void {
        this.loadResidents();
        this.loadFilms();
    }

    loadResidents(): void {
        this.planetDetails.residents.forEach(e => {
            this.planetService.getResidents(e).subscribe(response => {
                this.residentsList.push(response);
            });
        });
    }

    loadFilms(): void {
        this.planetDetails.films.forEach(e => {
            this.planetService.getFilms(e).subscribe(response => {
                this.filmList.push(response);
            });
        });
    }

}
