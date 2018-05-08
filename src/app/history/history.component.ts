import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {TierionService} from '../services/tierion.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public historyData: Observable<any[]>;
  verified:any;
  constructor(private db: AngularFirestore,
    private tierionService: TierionService) { }

  ngOnInit() {

    this.historyData = this.db.collection('/agent_c_inout',ref => ref.where('agentName', '==', 'Jince')).valueChanges();
    this.historyData.subscribe(result => {
      console.log(result);
    });

  }

  verifyData(history, element, text){
    element.textContent = text;
    element.disabled = true;
    if(history.blockChanData!==undefined){
    this.tierionService.getDataFromTierionAndValidate(history.blockChanData.bcid).subscribe(result =>{
      var inoutInfoBc=(JSON.parse(result.data.inoutinfo));
      var bcInTime=(new Date(inoutInfoBc.intime));
      var localInTime=(history.inoutInfo.intime);
      if(bcInTime.getTime()==localInTime.getTime()){
        this.verified=true;
        
      }
      else
      this.verified=false;
      history.isVerified=this.verified;
    })
  }else
  history.isVerified=false;
  return this.verified;
  }
  calculateHours(history){

    if(history.inoutInfo.intime!=undefined && history.inoutInfo.outtime){
   var  intime=history.inoutInfo.intime?history.inoutInfo.intime:new Date();
   var outtime=history.inoutInfo.outtime?history.inoutInfo.outtime:new Date();
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
