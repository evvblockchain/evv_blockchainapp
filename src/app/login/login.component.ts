import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { config } from '../config/app.config';
import { Globals } from '../globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userData: Observable<any[]>;
  public checkinData: Observable<any[]>;
  public checkinEmotion: Observable<any[]>;
  
  constructor(private db: AngularFirestore,
    private authService: AuthService,
     private router: Router,
     private spinnerService: Ng4LoadingSpinnerService,
     private globals: Globals,) {
      this.globals.isLoggedin=false;
  }

  config=config;
  user = {
    email: 'jince.george@xe04.ey.com',
    password: 'test123'
 };

  ngOnInit() {
    
  }
 

 signInWithEmail() {
  this.spinnerService.show();
  this.authService.signInRegular(this.user.email, this.user.password)
     .then((res) => {
        console.log(res);
    

        this.userData = this.db.collection('/evvagents', ref => ref.where('email', '==', res.email)).valueChanges();
              this.userData.subscribe(result => {
                this.globals.agentData= result;
                this.spinnerService.hide();
                this.authService.getFaceId(result[0].photo).subscribe(res => {
        
                  console.log(res);
                  this.globals.loggedUserFaceId=res[0].faceId;
                });
             
              // this.messageService.sendMessage(result[0].clientname);
                console.log(result)

                if(result[0].role==="vendor"){
                  this.spinnerService.hide();
                  this.globals.isLoggedin=true;
                this.router.navigate(['dashboard/history']);
                }
                else{
                  this.isCheckdeInToday(result);
               
                }
              });
        
     })
     .catch((err) => {
       console.log('error: ' + err);
       alert(config.messages.LOGIN_ERROR);
       this.spinnerService.hide();
      });
}

isCheckdeInToday(result){

  this.checkinData = this.db.collection('/agent_c_inout', ref => ref.where('agentid', '==', result[0].agentId).where("checkindate", "==", new Date().toLocaleDateString("en-US"))).valueChanges();
  this.checkinData.subscribe(checkinDataResult => {
    this.spinnerService.hide();
    if(!this.globals.isLoggedin){
    console.log(checkinDataResult);
    if(checkinDataResult.length>0){
      if(checkinDataResult[0].checkoutdate!=""){
        this.router.navigate(['dashboard/history']);
      }else{
      
        this.checkinEmotion = this.db.collection('/agencyEmotion', ref => ref.where('agentid', '==', result[0].agentId).where("date", "==", new Date().toLocaleDateString("en-US"))).valueChanges();
        this.checkinEmotion.subscribe(checkinEmotionResult => {
          this.spinnerService.hide();
          if(!this.globals.isLoggedin){
          console.log(checkinEmotionResult);
          this.globals.checkinEmotion=checkinEmotionResult[0]["checkInEmotion"];
          this.globals.checkinDate=checkinDataResult[0].checkintime;
          this.globals.isLoggedin=true;
          this.globals.isCheckIn=false;
          this.router.navigate(['dashboard/checkout']);
          }
        });
     
      }
    } 
    else{
      this.spinnerService.hide();
      this.globals.isLoggedin=true;
      this.router.navigate(['dashboard']);
    }
   
  }
    
  });
}

}
