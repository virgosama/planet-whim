import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {HttpClientModule} from '@angular/common/http';
import {PlanetDataComponent} from './components/planet-list/planet-data/planet-data.component';
import {PlanetListComponent} from './components/planet-list/planet-list.component';
import {ScrollTrackerDirective} from './components/planet-list/scroll-tracker.directive';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PlanetDetailsComponent} from './components/planet-details/planet-details.component';

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        PlanetDataComponent,
        PlanetListComponent,
        PlanetDetailsComponent,
        ScrollTrackerDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
