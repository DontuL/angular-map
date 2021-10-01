import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center : any;
  wer : any;
  position : any;
  label :string;
  circleOptions: { fillColor: string; };
  circleOption2: { };
  colorOption: { };
  markerOptions: google.maps.MarkerOptions;
  vertices: google.maps.LatLngLiteral[]
  vertices2: google.maps.LatLngLiteral[]
  
  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.wer={lat: 45.4762579279277,  lng: 9.17171886043944}
    this.position = this.center;
    this.label = "ciao";
    this.circleOptions = {fillColor : 'red'}
    this.circleOption2 = {fillColor : 'green'}
    this.colorOption = {fillColor : 'red'}
    let iconData : google.maps.Icon = {
      url:'./assets/img/images.jfif',
      scaledSize : new google.maps.Size(104,76)
 }
    this.markerOptions = {icon:iconData}
    this.vertices = [
      {  lat: this.center.lat + 0.001, lng: this.center.lng - 0.002 },
      {  lat: this.center.lat, lng: this.center.lng },
      {  lat: this.center.lat - 0.001, lng: this.center.lng - 0.002}
 ];
 this.vertices2 = [
  {  lat: this.center.lat + 0.001, lng: this.center.lng + 0.002},
  {  lat: this.center.lat + 0.001, lng: this.center.lng + 0.001},
  {  lat: this.center.lat - 0.001, lng: this.center.lng + 0.001},
  {  lat: this.center.lat - 0.001, lng: this.center.lng + 0.002}
];
  }
  redColor(){
    this.circleOption2 = {fillColor : 'red'}
    this.colorOption = {fillColor : 'red'}
  }
  greenColor(){
    this.circleOption2 = {fillColor : 'green'}
    this.colorOption = {fillColor : 'green'}
  }
  blueColor(){
    this.circleOption2 = {fillColor : 'blue'}
    this.colorOption = {fillColor : 'blue'}
  }

}

