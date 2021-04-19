import { Component } from '@angular/core';
import flight_data from './data';

export class FlightService {

  private data: any;

  constructor() {
    this.data = flight_data
  }

  private getFlight() {
    return this.data;
  }

  searchFlight(source: string, dest: string) {
    return this.getFlight().filter((f)=>(f.source.key===source && f.destination.key===dest));
  }

  booknow(name: string, email: string){
    return true;
  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FlightService]
})
export class AppComponent {

  source: string;
  destination: string;
  booking_date: string;
  available_flight: any;
  name: string;
  email: string;
  booking_conf_frm_visible: boolean;
  booking_conf_frm_submit: boolean;
  title= "Flight Booking";

  // your code here

  constructor(private flightService:FlightService){

this.source = 'BLR';
this.destination = 'DEL';


  }

ngOnInit(){
 this.booking_date = new Date().toISOString();
}
  onSearch(source,destination){
this.flightService.searchFlight(source,destination).forEach((element) => {
this.available_flight = element;
 console.log(this.available_flight);
    });
}
booknow(){
this.booking_conf_frm_visible = true;
}
bookingConfirmed(name,email){
if(this.flightService.booknow(name,email)){

  this.booking_conf_frm_submit = true;
  console.log(name,email);

}

}
Cancel(){
this.booking_conf_frm_visible = !this.booking_conf_frm_visible;
this.booking_conf_frm_submit = !this.booking_conf_frm_submit;
this.available_flight = null;


}
  
}
