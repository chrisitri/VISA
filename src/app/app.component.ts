import { Component, OnInit } from '@angular/core';
import { WebcommService } from './services/webcomm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public holidayAPIData = {status:0, holidays:[{date:"",name:"",observed:"",public:false}]};
  private month:number=0;
  private dataLoaded:boolean = false;
  public months = [
    this.holidayAPIData,
    this.holidayAPIData,
    this.holidayAPIData,
    this.holidayAPIData,
    this.holidayAPIData,
    this.holidayAPIData,
    this.holidayAPIData,
    this.holidayAPIData,
    this.holidayAPIData,
    this.holidayAPIData,
    this.holidayAPIData,
    this.holidayAPIData
  ];
  // was going to display header section for each month and separate the output - ran outta tries with error 429's
  //public monthNames:string[] = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  constructor(private webcommService: WebcommService) {
  }

  //--------------------------------------------------------------------------------------------------------------------
  ngOnInit() {

    for( let i=1; i<13; i++ ) {
      this.webcommService.loadHolidayAPIData('https://holidayapi.com/v1/holidays?country=US&month='+i+'&year=2016&key=69ffb707-3131-4444-bc75-19c1ee7fe1ea')
        .subscribe(
          (holidayAPIData) => this.onHolidayAPIDataLoaded(holidayAPIData, i),
          err => {
            this.onHolidayAPIDataError(err);
      });
    }
  }

  //--------------------------------------------------------------------------------------------------------------------
  public onHolidayClick(event, month, index):void {
    // was going to display this in the view next to the holiday - doing a new route for this is not necessary - I can do routes
    console.log("date:"+this.months[month].holidays[index].date);
    console.log("observed:"+this.months[month].holidays[index].observed);
    console.log("public:"+this.months[month].holidays[index].public);
  }

  //--------------------------------------------------------------------------------------------------------------------
  private onHolidayAPIDataError(err):void {
    console.log(err);
  }

  //--------------------------------------------------------------------------------------------------------------------
  private onHolidayAPIDataLoaded(holidayAPIData, month):void {
    // store the holiday data in the data model array
    this.months[month] = holidayAPIData;
    this.month++;
    // see if we're done
    if (month == 12)
      this.dataLoaded = true;
  }
}



