import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';
import { Globals } from '../globals';
import { MessageService } from '../services/message.service';
import {ClockService} from '../services/clock.service';

declare let cordova: any;
declare let  navigator: any;
declare let  Camera: any;
declare let  cameraSuccess: any;
declare let  cameraError: any;

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})


export class CheckinComponent implements OnInit {

  today = Date.now();
  time: Date;
  currentUser;
  title: string = 'My first AGM project';
  public base64Image : String;
  public loggedInUserImagefaceId:string;
  lat: number = 51.678418;
  lng: number = 7.809007;
  public clientdata: Observable<any[]>;
  public agentData: Observable<any[]>;
  constructor(private db: AngularFirestore,private authService: AuthService,
    private spinnerService: Ng4LoadingSpinnerService,
    private router: Router,private globals: Globals,
    private messageService: MessageService,
    private clockService: ClockService) { 
    this.spinnerService.show();
    
  }

  ngOnInit() {
    
    this.currentUser=this.authService.getLoggedInUser();
    console.log( this.currentUser.email);
    this.clientdata = this.db.collection('/clientlist').valueChanges();
    this.agentData = this.db.collection('/evvagents', ref => ref.where('email', '==', this.currentUser.email)).valueChanges();
    //this.agentData = this.db.collection('evvagents', ref => ref.where('Agents.email', '==', 'jince.george@xe04.ey.com')).valueChanges();
    this.clockService.getClock().subscribe(time => this.time = time);

      console.log(this.clientdata);
    this.clientdata.subscribe(result => {
      
      this.spinnerService.hide();
      this.globals.clientdata= result;
     // this.messageService.sendMessage(result[0].clientname);
      console.log(result)
    });
    this.agentData.subscribe(result => {
      this.spinnerService.hide();
      this.globals.agentData= result;
      this.authService.getFaceId(result[0].photo).subscribe(res => {
        
        console.log(res);
        this.loggedInUserImagefaceId=res[0].faceId;
        this.globals.loggedUserFaceId=this.loggedInUserImagefaceId;
      });

      console.log(result)})
  }
  takeSelfie(){

    if (typeof(<any>cordova) !== 'undefined') {
      console.log(cordova);
      const cameraOptions = {
        destinationType: (<any> Camera).DestinationType.DATA_URL,
        quality: 25,
        encodingType: Camera.EncodingType.JPEG,
        correctOrientation: true,
        cameraDirection:Camera.Direction.FRONT
      };
      console.log(navigator);
      // (<any> navigator).camera.getPicture(cameraOptions).then((imageData) => {
      //   // imageData is a base64 encoded string
      //     this.base64Image = "data:image/jpeg;base64," + imageData;
      //     this.router.navigate(['dashboard/verify']);
      // }, (err) => {
      //     console.log(err);
      // });
      
      (<any> navigator).camera.getPicture((value) => {
        //alert(value);
        this.spinnerService.show();
        this.router.navigate(['dashboard/verify',value]);
      }, 
      (value) => {
        alert(value);
      },cameraOptions)
  
    }
    
  
    
  }
  
  
}