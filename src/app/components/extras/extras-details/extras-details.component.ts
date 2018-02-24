import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Food} from'../../food';

@Component({
  selector: 'app-extras-details',
  templateUrl: './extras-details.component.html',
  styleUrls: ['./extras-details.component.css']
})
export class ExtrasDetailsComponent implements OnInit {


  @Input() extra:Food;


  constructor(private _route:ActivatedRoute) { 
  }


  ngOnInit() {
    let scope = this;
    this._route.queryParams.subscribe(data=>{

      this.extra = data as any;
    });

  }


}
