import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { config } from '../config/app.config';
import { Http,Headers,RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";
@Injectable()
export class TierionService {
    constructor(private http: Http) {
   
    }
    saveCheckinToBlockChain(checkinData){
        const headers=new Headers(config.TierionAPI.Header);
        const options=new RequestOptions({headers});
        const dataToSave=checkinData;
        return this.http.post(config.TierionAPI.URL+'records',dataToSave,options)
        .map(res =>{ 
          return (res.json());
        })
    }
  
}