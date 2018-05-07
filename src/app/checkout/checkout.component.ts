import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../services/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {ClockService} from '../services/clock.service';

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
  prodcollection: AngularFirestoreCollection<any> = this.db.collection('agent_c_inout');

  public clientdata: Observable<any[]>;
  public agentData: Observable<any[]>;
  constructor(private globals: Globals,
    private spinnerService: Ng4LoadingSpinnerService,
    private authService: AuthService,
    private db: AngularFirestore,
    private clockService: ClockService) {

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

}
