import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { race } from 'rxjs';
import { EventInfo } from 'src/app/model/event-info';
import { Racetypedetail } from 'src/app/model/racetypedetail';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-salesreport',
  templateUrl: './salesreport.component.html',
  styleUrls: ['./salesreport.component.css']
})
export class SalesreportComponent implements OnInit {
  events!: EventInfo;
  eventId: number = 2;
  raceTypelist!: Array< Racetypedetail>;
  totalSales : number=0;
  constructor(private salesService: SalesService,
    private route: ActivatedRoute) {
    
   }
  ngOnInit(): void {
    this.eventId = this.route.snapshot.params['id'];
    this.salesService.getSalesEventInfo(this.eventId).subscribe(
      data => {this.events = data 
       
        for(let racetype of this.events.raceTypeDetailList) {
          this.totalSales += racetype.sales
        }
        console.log(this.totalSales);
        
      })
  
  }
  }