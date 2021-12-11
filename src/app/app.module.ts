import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PlanetDataComponent} from './components/planet-list/planet-data/planet-data.component';
import {PlanetListComponent} from './components/planet-list/planet-list.component';
import {ScrollTrackerDirective} from './components/planet-list/scroll-tracker.directive';
import {ReactiveFormsModule} from '@angular/forms';
import {PlanetDetailsComponent} from './components/planet-details/planet-details.component';

@NgModule({
    declarations: [
        AppComponent,
        PlanetDataComponent,
        PlanetListComponent,
        PlanetDetailsComponent,
        ScrollTrackerDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
