import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import * as L from 'leaflet'
@Component({
  selector: 'app-spatial',
  templateUrl: './spatial.component.html',
  styleUrls: ['./spatial.component.css']
})
export class SpatialComponent {
  id!: string;
  date!: string;

  private map: any;
constructor (private _apicall:ApicallService) {
}
ngOnInit(){
  this.map = L.map('map', {
    center: [ 51.452069800457394, 7.016606745185527
      ],
    zoom: 13
  });

  const iconprops=L.icon({
    iconUrl: '../../assets/location-pin.png',
    iconSize: [40, 40]});
  var marker=L.marker([51.45,7.01],{icon:iconprops}).addTo(this.map)
  marker.bindPopup("<b>I am a Centroid</b>")

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(this.map);
}
onSubmit(){
  this.date = this.date.replace(/-/g, '/');
  console.log("the component date",this.date)
 //the subscribe method seems to be deprecated so in reference with https://rxjs.dev/deprecations/subscribe-arguments

this._apicall.getspatialdata(this.id,this.date).subscribe({
next:(data:any)=>{
  console.log( "SPATIAL DATA",data);
  const geoJsonLayer=L.geoJSON(data,
    {
    onEachFeature:(feature,layer) =>{
      layer.bindPopup(`<b>NAME:</b> ${feature.properties.NAME} <br>`);
      layer.on({
        mouseover: (event) => {
          layer.openPopup();
    }
  })
},
style: {
  color: 'red',
  opacity: 0.5
}

});
geoJsonLayer.addTo(this.map)
  },
  error:(error:any)=>{
    console.log("An Error has occured while fetching the data",error);
    alert("no data found for the particular ID and date")
    }
});
}
}
