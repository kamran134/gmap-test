import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-gmap-layer',
    templateUrl: './gmap-layer.component.html',
    styleUrl: './gmap-layer.component.css'
})
export class GmapLayerComponent implements OnInit, AfterContentInit {
    @ViewChild('gmap') gmapElement: any;
    map!: google.maps.Map;
  //ctaLayer: google.maps.KmlLayer;

  constructor() { }
    
    ngOnInit(): void {
        let mapProp: any = {
            center: new google.maps.LatLng(44.475, -73.212),
            zoom: 13,    
            mapTypeId: google.maps.MapTypeId.ROADMAP     
        };

        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    }

    ngAfterContentInit(): void {
        let ctaLayer = new google.maps.KmlLayer({
            url: 'https://sites.google.com/site/freeparkingburlington/home/freeParking.kml',
            map: this.map
        });
    }
}
