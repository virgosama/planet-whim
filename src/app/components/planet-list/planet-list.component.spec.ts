import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlanetListComponent} from './planet-list.component';
import {PlanetService} from '../../services/planet.service';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PlanetListResponse} from '../../models/planet';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {of} from 'rxjs';

describe('PlanetListComponent', () => {
    let component: PlanetListComponent;
    let fixture: ComponentFixture<PlanetListComponent>;
    let service: PlanetService;
    const formBuilder: FormBuilder = new FormBuilder();
    const getPlanetsResp = {
        count: 2,
        next: 'https://swapi.dev/api/planets/?page=2',
        previous: null,
        results: [
            {
                climate: 'arid',
                created: '2014-12-09T13:50:49.641000Z',
                diameter: '10465',
                edited: '2014-12-20T20:58:18.411000Z',
                films: ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/3/'],
                gravity: '1 standard',
                name: 'Tatooine',
                orbital_period: '304',
                population: '200000',
                residents: ['https://swapi.dev/api/people/1/', 'https://swapi.dev/api/people/2/', 'https://swapi.dev/api/people/4/'],
                rotation_period: '23',
                surface_water: '1',
                terrain: 'desert',
                url: 'https://swapi.dev/api/planets/1/'
            },
            {
                climate: 'temperate',
                created: '2014-12-10T11:35:48.479000Z',
                diameter: '12500',
                edited: '2014-12-20T20:58:18.420000Z',
                films: ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/3/'],
                gravity: '1 standard',
                name: 'Aldeeran',
                orbital_period: '364',
                population: '2000000000',
                residents: ['https://swapi.dev/api/people/1/', 'https://swapi.dev/api/people/2/', 'https://swapi.dev/api/people/4/'],
                rotation_period: '24',
                surface_water: '40',
                terrain: 'grasslands, mountains',
                url: 'https://swapi.dev/api/planets/2/'
            }
        ]
    } as PlanetListResponse;

    beforeEach(async(() => {
        service = jasmine.createSpyObj('PlanetService', ['getPlanets, searchPlanets']);
        TestBed.configureTestingModule({
            declarations: [
                PlanetListComponent
            ],
            providers: [
                PlanetService,
                {provide: FormBuilder, useValue: formBuilder}
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                HttpClientModule,
                ReactiveFormsModule,
                FormsModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
        service = TestBed.inject(PlanetService);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlanetListComponent);
        component = fixture.componentInstance;
        spyOn(service, 'getPlanets').and.returnValue(of(getPlanetsResp));
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(component.nextPage).toEqual(getPlanetsResp.next);
        expect(component.planetArrays).toEqual(getPlanetsResp.results);
    });
});
