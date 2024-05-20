import { Component, OnInit } from '@angular/core';
import { GoogleMap, MapKmlLayer, MapMarker } from '@angular/google-maps';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrl: './map.component.css',
    standalone: true,
    imports: [GoogleMap, MapKmlLayer, MapMarker]
})
export class MapComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    imgUrl: string = 'assets/azeri.jpg';
    display: any;
    center: google.maps.LatLngLiteral = {
        lat: 39.602,
        lng: 47.152
    };
    kmlFuzuli = 'assets/Fuzuli_BasPlan/doc.kml';
    zoom = 15;
    title = 'Füzuli';
    lang = 'az';

    fuzuliLocations: any[] = [
        { lat: 39.602, lng: 47.152 },
        { lat: 39.603, lng: 47.152 },
        { lat: 39.604, lng: 47.152 },
    ];
    
    agdamLocations: any[] = [
        { lat: -31.56391, lng: 147.154312 },
        { lat: -33.718234, lng: 150.363181 },
        { lat: -33.727111, lng: 150.371124 },
        { lat: -33.848588, lng: 151.209834 },
        { lat: -33.851702, lng: 151.216968 },
        { lat: -34.671264, lng: 150.863657 },
        { lat: -35.304724, lng: 148.662905 },
        { lat: -37.75, lng: 145.116667 },
        { lat: -37.759859, lng: 145.128708 },
        { lat: -37.765015, lng: 145.133858 },
        { lat: -37.770104, lng: 145.143299 },
        { lat: -37.7737, lng: 145.145187 },
        { lat: -37.774785, lng: 145.137978 },
        { lat: -37.819616, lng: 144.968119 },
        { lat: -38.330766, lng: 144.695692 },
        { lat: -42.734358, lng: 147.439506 },
        { lat: -42.734358, lng: 147.501315 },
        { lat: -42.735258, lng: 147.438 },
    ];

    /*------------------------------------------
    --------------------------------------------
    moveMap()
    --------------------------------------------
    --------------------------------------------*/
    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.center = (event.latLng.toJSON());
    }

    /*------------------------------------------
    --------------------------------------------
    move()
    --------------------------------------------
    --------------------------------------------*/
    move(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.display = event.latLng.toJSON();
    }
}
