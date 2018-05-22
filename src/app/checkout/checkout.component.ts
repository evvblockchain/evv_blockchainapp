import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../services/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {ClockService} from '../services/clock.service';
import {CameraService} from '../services/camera.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  today = Date.now();
  time: Date;
  totalHours:any;
  currentUser;
  workingSession:any="00:00:00 Hrs";
  
  prodcollection: AngularFirestoreCollection<any> = this.db.collection('agent_c_inout');

  public clientdata: Observable<any[]>;
  public agentData: Observable<any[]>;
  constructor(private globals: Globals,
    private spinnerService: Ng4LoadingSpinnerService,
    private authService: AuthService,
    private db: AngularFirestore,
    private clockService: ClockService,
    private cameraService: CameraService,
    private router: Router) {

      this.spinnerService.show();

   }

  ngOnInit() {

    this.clockService.getClock().subscribe(time => this.time = time);

    this.currentUser=this.authService.getLoggedInUser();
    console.log( this.currentUser.email);
    this.clientdata = this.db.collection('/clientlist').valueChanges();
    this.agentData = this.db.collection('/evvagents', ref => ref.where('email', '==', this.currentUser.email)).valueChanges();
    //this.agentData = this.db.collection('evvagents', ref => ref.where('Agents.email', '==', 'jince.george@xe04.ey.com')).valueChanges();
   
    this.clientdata.subscribe(result => {
      this.globals.clientdata= result;
      this.spinnerService.hide();
     // this.messageService.sendMessage(result[0].clientname);
      console.log(result);

      let diffInMs: number = Date.parse(result[0].timing.outtime) - Date.parse(result[0].timing.intime);
      let diffInHours: number = diffInMs / 1000 / 60 / 60;
      this.totalHours=(diffInHours<10)? '0'+diffInHours:diffInHours;
    });

    this.agentData.subscribe(result => {
      
      //this.spinnerService.hide();
     // this.messageService.sendMessage(result[0].clientname);
      console.log(result)
    });

    let timer = Observable.timer(1000,1000);
    let checkinTime=this.globals.checkinDate?this.globals.checkinDate:new Date();
    var dif =  new Date().getTime()-checkinTime.getTime();

    var Seconds_from_T1_to_T2 = dif / 1000;
    var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
    timer.subscribe(t=>{
      this.workingSession = t
      t=Seconds_from_T1_to_T2;
       let hours:any = Math.floor(t / 3600)
  let minutes:any = Math.floor((t % 3600)/60);
 let seconds:any = Math.floor(t % 60);

  hours = minutes < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  this.workingSession=hours + ":" + minutes + ":" + seconds+' Hrs';
  Seconds_from_T1_to_T2++;
    });

  }
  saveCheckinData(){
    var date=new Date();
    var dateStamp=(date.getMonth() + 1) + '' + date.getDate() + '' +  date.getFullYear();
    this.prodcollection.doc(dateStamp.toString()).set({
      agentId: 'A345231',
      agentName: 'Jince',
      inoutInfo:{
        intime:new Date(),
        inloc:{
          lat:'28.5367841',
          long:'-28.5367841'
        }
      },
      clientId:'C11223',
      clientName:'Bill Gates'

    })
      .catch((err) => {
      console.log(err);
    })
  }

  takeSelfie(){
    this.globals.isCheckIn=false;
    this.cameraService.takePicture(value=>{
      this.spinnerService.show();
      this.router.navigate(['dashboard/verify',value]);

    },(value) => {
      this.spinnerService.hide();
      alert(value);
    })  
  }

  onInfoClick(){
    console.log("onInfoClick");
    this.router.navigate(['dashboard/clientInfo']);
  }

}
