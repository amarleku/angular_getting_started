import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Food} from'../../food';

@Component({
  selector: 'app-sandwich-details',
  templateUrl: './sandwich-details.component.html',
  styleUrls: ['./sandwich-details.component.css']
})
export class SandwichDetailsComponent implements OnInit {
  
  @Input() sandwich:Food;
  
  constructor(private _route:ActivatedRoute) { 
  }


  ngOnInit() {
    let scope = this;
    this._route.queryParams.subscribe(data=>{

      this.sandwich = data as any;
    });

  }

}
