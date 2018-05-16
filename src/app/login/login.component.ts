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
  constructor(private db: AngularFirestore,
    private authService: AuthService,
     private router: Router,
     private spinnerService: Ng4LoadingSpinnerService,
     private globals: Globals,) {
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
        this.spinnerService.hide();

        this.userData = this.db.collection('/evvagents', ref => ref.where('email', '==', res.email)).valueChanges();
        this.userData.subscribe(result => {
          this.globals.agentData= result;
          this.spinnerService.hide();
         
         // this.messageService.sendMessage(result[0].clientname);
          console.log(result)

          if(result[0].role==="vendor")
          this.router.navigate(['dashboard/history']);
          else
          this.router.navigate(['dashboard']);
        });
        
     })
     .catch((err) => {
       console.log('error: ' + err);
       alert(config.messages.LOGIN_ERROR);
       this.spinnerService.hide();
      });
}

}
