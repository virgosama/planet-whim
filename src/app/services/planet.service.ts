import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PlanetListResponse} from '../models/planet';
import {Observable} from 'rxjs';
import {Resident} from '../models/residents';
import {Film} from '../models/films';

@Injectable({
    providedIn: 'root'
})
export class PlanetService {

    constructor(private httpClient: HttpClient) {
    }

    getPlanets(url: string): Observable<PlanetListResponse> {
        url = url === '' ? 'https://swapi.dev/api/planets' : url;
        return this.httpClient.get<PlanetListResponse>(url);
    }

    searchPlanets(searchKey: string): Observable<PlanetListResponse> {
        return this.httpClient.get<PlanetListResponse>(`https://swapi.dev/api/planets/?search=${searchKey}`);
    }

    getResidents(url: string): Observable<Resident> {
        return this.httpClient.get<Resident>(url);
    }

    getFilms(url: string): Observable<Film> {
        return this.httpClient.get<Film>(url);
    }
}
