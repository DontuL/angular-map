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
  circleOption2: { fillColor: string; };
  
  
  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.wer={lat: 45.4762579279277,  lng: 9.17171886043944}
    this.position = this.center;
    this.label = "ciao";
    this.circleOptions = {fillColor : 'red'}
    this.circleOption2 = {fillColor : 'green'}
    
  }
  redcolor(){
    this.circleOption2 = {fillColor : 'red'}
  }
  greencolor(){
    this.circleOption2 = {fillColor : 'green'}
  }
  bluecolor(){
    this.circleOption2 = {fillColor : 'blue'}
  }

}

