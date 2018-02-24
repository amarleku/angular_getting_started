import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Food} from'../../food';

@Component({
  selector: 'app-salad-details',
  templateUrl: './salad-details.component.html',
  styleUrls: ['./salad-details.component.css']
})
export class SaladDetailsComponent implements OnInit {

  @Input() salad:Food;
  
  constructor(private _route:ActivatedRoute) { 
  }


  ngOnInit() {
    let scope = this;
    this._route.queryParams.subscribe(data=>{

      this.salad = data as any;
    });

  }

}
