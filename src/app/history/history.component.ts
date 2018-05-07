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

  verifyData(history){
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
    })
  }
  return this.verified;
  }

}
