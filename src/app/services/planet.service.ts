import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PlanetListResponse} from '../models/planet';
import {Observable} from 'rxjs';
import {Resident} from '../models/residents';

@Injectable({
    providedIn: 'root'
})
export class PlanetService {

    baseUrl = 'https://swapi.dev/api/';

    constructor(private httpClient: HttpClient) {
    }

    loadPlanets(url: string): Observable<PlanetListResponse> {
        url = url === '' ? 'https://swapi.dev/api/planets' : url;
        return this.httpClient.get<PlanetListResponse>(url);
    }

    searchPlanets(searchKey: string): Observable<PlanetListResponse> {
        console.log(searchKey);
        return this.httpClient.get<PlanetListResponse>(`https://swapi.dev/api/planets/?search=${searchKey}`);
    }

    getResidentsName(): Observable<Resident[]> {
        return this.httpClient.get<Resident[]>
        (`${this.baseUrl}/people`);
    }
}
