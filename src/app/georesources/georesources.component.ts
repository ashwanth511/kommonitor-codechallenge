import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router'
import * as L from 'leaflet'
@Component({
  selector: 'app-georesources',
  templateUrl: './georesources.component.html',
  styleUrls: ['./georesources.component.css']
})
export class GeoresourcesComponent {
  id!: string;
  date!: string;
  private map: any;
constructor (private _apicall:ApicallService) {
}
ngOnInit(){
  this.map = L.map('map', {
    center: [ 51.452069800457394, 7.016606745185527
      ],
    zoom: 12
  });
  const northlocationicon=L.icon({
    iconUrl: '../../assets/flag.png',
    iconSize: [40, 40]});

  var marker=L.marker([51.93514440327027, 7.652052782305122],{icon:northlocationicon}).addTo(this.map)
  marker.bindPopup("<b>52°North Spatial Information Research</b>")

  const centroidicon=L.icon({
    iconUrl: '../../assets/location-pin.png',
    iconSize: [43, 43]});

  var marker1=L.marker([ 51.452069800457394, 7.016606745185527
  ],{icon:centroidicon}).addTo(this.map)
  marker1.bindPopup("<b>I am just a centroid</b>")

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(this.map);
}
  onSubmit(){

  this.date = this.date.replace(/-/g, '/');
  console.log("the component date",this.date)
  //the subscribe method seems to be deprecated so in reference with https://rxjs.dev/deprecations/subscribe-arguments
 this._apicall.getgeoresourcesdata(this.id, this.date).subscribe({
  next: (data: any) => {
    console.log("GEORESOURCES DATA", data);
    const geoJsonLayer = L.geoJSON(data, {
      pointToLayer: function (feature, latlng) {
        const iconafterload = L.icon({
          iconUrl: '../../assets/location.png',
          iconSize: [28, 28],

        });
        return L.marker(latlng, {icon: iconafterload});
      },
      onEachFeature: (feature, layer) => {
        layer.bindPopup(`Name: ${feature.properties.NAME}`);
      }
    });
    geoJsonLayer.addTo(this.map);
  },
  error: (error: any) => {
    console.log('An error occurred while fetching georesources data:', error);
    alert("no data found for the particular ID and date")
  }
});

  }

}
