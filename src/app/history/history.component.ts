import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {TierionService} from '../services/tierion.service';
import { DatePipe } from '@angular/common';
import * as shajs from 'sha.js';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [DatePipe]
 
})
export class HistoryComponent implements OnInit {

  public historyData: Observable<any[]>;
  verified:any;
  constructor(private db: AngularFirestore,
    private tierionService: TierionService,
    private datePipe: DatePipe) { }

  ngOnInit() {

    this.historyData = this.db.collection('/agent_c_inout',ref => ref.where('agentname', '==', 'Jince')).valueChanges();
    this.historyData.subscribe(result => {
      console.log(result);
    });

  }

  verifyData(history, element, text){
    element.textContent = text;
    element.disabled = true;
    if(history.blockChanData!==undefined){
    this.tierionService.getDataFromTierionAndValidate(history.blockChanData.bcid).subscribe(result =>{
     // var inoutInfoBc=(JSON.parse(result.data.inoutinfo));
      var bcInTime=(new Date(result.data.checkintime));
      return this.createObjectForHashComparison(history)
    })
  }else
  history.isVerified=false;
  return this.verified;
  }
  createObjectForHashComparison(history){
    var localCheckInData={
      agentid:history.agentid,
      agentname:history.agentname,
      clientid:history.clientid,
      clientname:history.clientname,
      checkintime:this.datePipe.transform(new Date(history.checkintime.toUTCString().replace(' GMT','')),'M/dd/yyyy hh:mm:ss a'),
      latlocation:history.latlocation.toString(),
      longlocation:history.longlocation.toString(),
      checkouttime:this.datePipe.transform(new Date(history.checkouttime.toUTCString().replace(' GMT','')),'M/dd/yyyy hh:mm:ss a'),
    }
    var dateUTC= this.datePipe.transform(new Date(history.checkintime.toUTCString().replace(' GMT','')),'M/dd/yyyy hh:mm:ss a');
    var sha256Data=shajs('sha256').update(JSON.stringify(localCheckInData)).digest('hex')
    if(history.blockChanData.sha256===sha256Data){
      history.isVerified=true;
    }
    else
    history.isVerified=false;
  }
  calculateHours(history){

    if(history.checkintime!=undefined && history.checkouttime){
   var  intime=history.checkintime?history.checkintime:new Date();
   var outtime=history.checkouttime?history.checkouttime:new Date();
   var dif =  outtime.getTime()-intime.getTime();

    var Seconds_from_T1_to_T2 = dif / 1000;
    var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);

    let hours:any = Math.floor(Seconds_from_T1_to_T2 / 3600)
    let minutes:any = Math.floor((Seconds_from_T1_to_T2 % 3600)/60);
   let seconds:any = Math.floor(Seconds_from_T1_to_T2 % 60);
  
    hours = minutes < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
   var hrsWorked=hours + ":" + minutes + ":" + seconds+' Hrs';
   return hrsWorked;
    }
  }

}
