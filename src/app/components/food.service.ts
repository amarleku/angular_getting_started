import {Injectable } from '@angular/core';

import {Food} from './food';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()

export class FoodService{
    

    private _foodUrl='./assets/food.json';
    
    constructor(private _http: HttpClient){}

    getFood():Observable<Food[]>{
        return this._http.get<Food[]>(this._foodUrl)
        .do(data=>console.log('All:') +JSON.stringify(data))
        .catch(this.handleError);
    }

    private handleError(err:HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}