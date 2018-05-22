import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Globals } from '../globals';
import { AngularFirestore,AngularFirestoreCollection  } from 'angularfire2/firestore';
import {LocationService} from '../services/location.service';
import {TierionService} from '../services/tierion.service';
import {Location} from '@angular/common';


declare let cordova: any;
declare let  navigator: any;

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  public base64Image : string;
  currentlocation:any;
  clientLocation:any;
  checkinDataToSave:any;
  prodcollection: AngularFirestoreCollection<any> = this.db.collection('agent_c_inout');
  emeotionCollection :AngularFirestoreCollection<any> = this.db.collection('agencyEmotion');
  constructor(private db: AngularFirestore,
    private route: ActivatedRoute,
    private spinnerService: Ng4LoadingSpinnerService,
    private authService: AuthService,
    private globals: Globals,
    private locationService: LocationService,
  private tierionService: TierionService,
  private router: Router,
  private _location: Location) { 

    this.route.params.subscribe( params => {
      console.log(params);
      this.base64Image=params['imagePath']
      this.spinnerService.hide();
    });
    
  }

  ngOnInit() {
  }
  verifyImage(){
    this.spinnerService.show();
   this.clientLocation =this.globals.clientdata[0];
    this.authService.getFaceId(this.base64Image).subscribe(res => {
      
      if(res!=undefined && res.length>0){
        this.saveEmotion(res);
        this.authService.verifyImage(res[0].faceId,this.globals.loggedUserFaceId).subscribe(result =>{
          console.log("Image",result);
          if(result!=undefined){
            
            if(result.confidence>0.5){
             this.locationService.getCurrentLocation((value)=>{
               if (this.locationService.arePointsNear(value,this.clientLocation.location)){
                  this.createCheckinData(value);
                  
               }
                  else{
                    this.spinnerService.hide();
                  alert('Please makes sure you have reached the client location before checkin.');
                  }
            
             },(value) => {
              this.spinnerService.hide();
              alert('Failed to find your location.');
            })  
            }
            else{
              this.spinnerService.hide();
              alert('Face verification has been failed. Please try with your own another selfie.');
              this._location.back();
            }
          }
        })
      }
      else{
        this.spinnerService.hide();
        alert('There is no face detected in the captured image.');
        this._location.back();
      }
    });
  }

  saveEmotion(response : any){
    if(response != null && response !== undefined){
    var date=new Date();
    var dateStamp=(date.getMonth() + 1) + '' + date.getDate() + '' +  date.getFullYear();
    if(this.globals.isCheckIn){
      
      var checkinData = { "checkInEmotion" :response[0].faceAttributes.emotion,
      "agentId":this.globals.agentData[0].agentId,
    "date":new Date().toLocaleDateString('en-US').toString()};
      this.emeotionCollection.doc(dateStamp.toString()+this.globals.agentData[0].agentId).set(checkinData)
      .catch((err) => {
      console.log(err);
    })
    this.globals.checkinEmotion=response[0].faceAttributes.emotion;
    }else{
      
      var checkoutData = { "checkOutEmotion" :response[0].faceAttributes.emotion,
      "checkInEmotion" :this.globals.checkinEmotion,
      "agentId":this.globals.agentData[0].agentId,
      "date":new Date().toLocaleDateString('en-US').toString()};
       this.emeotionCollection.doc(dateStamp.toString()+this.globals.agentData[0].agentId).set(checkoutData)
      .catch((err) => {
      console.log(err);
    })
    }
  }
  }
  

  

  saveCheckinDataToFireBase(isUpdate){
    var date=new Date();
    var dateStamp=(date.getMonth() + 1) + '' + date.getDate() + '' +  date.getFullYear();
    if(this.globals.isCheckIn){
    this.prodcollection.doc(dateStamp.toString()+this.globals.agentData[0].agentId).set( this.checkinDataToSave)
      .catch((err) => {
      console.log(err);
    })
  }else{
    this.prodcollection.doc(dateStamp.toString()+this.globals.agentData[0].agentId).update( this.checkinDataToSave)
    .catch((err) => {
    console.log(err);
  })
  }
    if(!isUpdate)
    this.saveCheckinToBlockChain( this.checkinDataToSave);
  }
  saveCheckinToBlockChain(dataToSave){
    this.tierionService.saveCheckinToBlockChain(dataToSave).subscribe(bcResponse =>{
      console.log(bcResponse);
      var blockChainData={
        bcid:bcResponse.id,
        accountId:bcResponse.accountId,
        datastoreId:bcResponse.datastoreId,
        sha256:bcResponse.sha256,
        status:bcResponse.status,
        timestamp:bcResponse.timestamp,
        datainBc:bcResponse.data
      }
      this.checkinDataToSave.blockChanData=blockChainData;
      this.saveCheckinDataToFireBase(true);
      this.spinnerService.hide();

      if(this.globals.isCheckIn){
      alert('You are successfully checked in.');
      this.router.navigate(['dashboard/checkout']);
      }else{
        alert('You are successfully checked out.');
        this.router.navigate(['dashboard/history']);
      }
    });
    
  }
  createCheckinData(locationData){
   

    if(this.globals.isCheckIn){
    this.checkinDataToSave={
      datastoreId:7103,
      agentid: this.globals.agentData[0].agentId,
      agentname: this.globals.agentData[0].name,
      clientid:this.globals.clientdata[0].clientid,
      clientname:this.globals.clientdata[0].clientname,
      checkintime:new Date(),
      latlocation:locationData.lat,
      longlocation:locationData.long,
      checkindate:new Date().toLocaleDateString("en-US"),
      checkoutdate:""

    };
    this.globals.checkinDate=new Date();
  }else{
    var messageIndex=Math.floor(Math.random() * 10) + 1;
    var clientMessage=this.globals.client_comments.messages[messageIndex];
    this.checkinDataToSave={
      datastoreId:7103,
      agentid: this.globals.agentData[0].agentId,
      agentname: this.globals.agentData[0].name,
      clientid:this.globals.clientdata[0].clientid,
      clientname:this.globals.clientdata[0].clientname,
      checkintime:this.globals.checkinDate,
      latlocation:locationData.lat,
      longlocation:locationData.long,
      checkouttime:new Date(),
      client_comment:clientMessage,
      checkindate:new Date().toLocaleDateString("en-US"),
      checkoutdate:new Date().toLocaleDateString("en-US")
    

    };
    
  }
    this.saveCheckinDataToFireBase(false);

  }



}
