import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Food} from'../../food';

@Component({
  selector: 'app-fajita-details',
  templateUrl: './fajita-details.component.html',
  styleUrls: ['./fajita-details.component.css']
})
export class FajitaDetailsComponent implements OnInit {

  @Input() fajita:Food;
  
  
    constructor(private _route:ActivatedRoute) { 
    }
  
  
    ngOnInit() {
      let scope = this;
      this._route.queryParams.subscribe(data=>{
  
        this.fajita = data as any;
      });
  
    }
  
  

}
