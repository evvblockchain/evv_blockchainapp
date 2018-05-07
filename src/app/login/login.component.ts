import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { config } from '../config/app.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,private spinnerService: Ng4LoadingSpinnerService) {
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
        this.router.navigate(['dashboard']);
     })
     .catch((err) => {
       console.log('error: ' + err);
       alert(config.messages.LOGIN_ERROR);
       this.spinnerService.hide();
      });
}

}
