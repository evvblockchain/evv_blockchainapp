import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {TierionService} from '../services/tierion.service';
import { DatePipe } from '@angular/common';
import * as shajs from 'sha.js';
import { Globals } from '../globals';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ViewChild, ElementRef } from '@angular/core';
import { window } from 'rxjs/operators/window';
import {WindowRef} from '../services/window.ref.service';
import { AuthService } from '../services/auth.service';

declare let cordova: any;
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [DatePipe]
 
})

export class HistoryComponent implements OnInit {
  @ViewChild('modalContent') modalContent:ElementRef;
  @ViewChild('FailedmodalContent') FailedmodalContent:ElementRef;
  public historyData: Observable<any[]>;
  public agentData: Observable<any[]>;
  historyLength=0;
  userRole;
  verified:any;
  closeResult: string;
  terionResultId:any;
  nativeWindow: any
  agentInfo:any=null;
  selectedAgent:string="Select Agent";
  percentageOfFeedback:any=0;
  clientCommentsObj:any={
    "documents":[]
  };
  constructor(private db: AngularFirestore,
    private tierionService: TierionService,
    private datePipe: DatePipe,
    private globals: Globals,
    private modalService: NgbModal,
    private winRef: WindowRef,
  private _authService : AuthService) { 

      this.nativeWindow = winRef.getNativeWindow();
    }

  ngOnInit() {
    this.userRole= this.globals.agentData[0].role;
     this.agentData = this.db.collection('/evvagents', ref => ref.where('role', '==', "agent")).valueChanges();
      if( this.globals.agentData[0].role=="agent"){
        this.historyData = this.db.collection('/agent_c_inout',ref => ref.where('agentname', '==',  this.globals.agentData[0].name)).valueChanges();
        this.historyData.subscribe(result => {
          console.log(result);
          this.historyLength=result.length;

    
        });
      } 
   

  }
  changeAction(agent){
    this.selectedAgent=agent.name;
   // this.clientCommentsObj.documents=[];
    this.agentInfo=agent;
    console.log(agent);
    this.historyData = this.db.collection('/agent_c_inout',ref => ref.where('agentname', '==', agent.name)).valueChanges();
    this.historyData.subscribe(result => {
      console.log(result);
      this.historyLength=result.length;
      this.clientCommentsObj.documents=[];
      if(result.length>0){
        //this.clientCommentsObj

        result.forEach((item, index) => {
          this.clientCommentsObj.documents.push({
            "language": "en",
            "id": index,
            "text": item.client_comment
          })

        });
        
        this._authService.getSentimentsOfComments(this.clientCommentsObj).subscribe(sentimentsResult=>{
          console.log(sentimentsResult);
          var sentimentalValue=0;
          if( sentimentsResult.documents.length>0){
          sentimentsResult.documents.forEach((item, index) => {
            sentimentalValue+=item.score;


          });
          this.percentageOfFeedback=Math.round( sentimentalValue*100/sentimentsResult.documents.length);
        }
        })
      }
    });
  }
  verifyData(history, element, text){
    element.textContent = text;
    element.disabled = true;
    if(history.blockChanData!==undefined){
    this.tierionService.getDataFromTierionAndValidate(history.blockChanData.bcid).subscribe(result =>{
     // var inoutInfoBc=(JSON.parse(result.data.inoutinfo));
     this.terionResultId=result.blockchain_receipt? result.blockchain_receipt.anchors[0].sourceId:null;
     console.log(result);
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
      checkintime:this.datePipe.transform(new Date(history.checkintime.toUTCString().replace(' GMT','')),'M/dd/yyyy h:mm:ss a'),
      latlocation:history.latlocation.toString(),
      longlocation:history.longlocation.toString(),
      checkouttime:this.datePipe.transform(new Date(history.checkouttime.toUTCString().replace(' GMT','')),'M/dd/yyyy h:mm:ss a'),
    }
    var dateUTC= this.datePipe.transform(new Date(history.checkintime.toUTCString().replace(' GMT','')),'M/dd/yyyy hh:mm:ss a');
    var sha256Data=shajs('sha256').update(JSON.stringify(localCheckInData)).digest('hex')
    if(history.blockChanData.sha256===sha256Data){
      history.isVerified=true;
      this.open(this.modalContent);
    }
    else{
    history.isVerified=false;
    this.open(this.FailedmodalContent);
    }
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

  open(content) {
    this.modalService.open(content, { centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  viewBCTransaction(){
    var bcLink='https://www.blocktrail.com/BTC/tx/' + this.terionResultId;
    
    if (typeof(<any>cordova) !== 'undefined')
    var ref = cordova.InAppBrowser.open(bcLink, '_blank', 'location=yes');
else
      var newWindow = this.nativeWindow.open(bcLink + this.terionResultId,"_blank", "location=no,enableViewportScale=yes");

   // newWindow.location = 'https://www.blocktrail.com/BTC/tx/' + this.terionResultId;
    //window.open("https://www.blocktrail.com/BTC/tx/"+this.terionResultId)
  }

}
