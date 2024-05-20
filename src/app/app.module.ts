import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { GoogleMapsModule, MapKmlLayer } from '@angular/google-maps'
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        GoogleMapsModule,
        MapComponent
    ],
    providers: [
        provideClientHydration()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
