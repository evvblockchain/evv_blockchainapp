import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';
import { Globals } from '../globals';
import { MessageService } from '../services/message.service';
import {ClockService} from '../services/clock.service';
import { Observable } from 'rxjs/Observable';
import {Location} from '@angular/common';

@Component({
  selector: 'app-clientinfo',
  templateUrl: './clientinfo.component.html',
  styleUrls: ['./clientinfo.component.css']
})
export class ClientinfoComponent implements OnInit {

  clientInfo : any = {};
  lat: number = 51.678418;
  lng: number = 7.809007;
  public clientdata: Observable<any[]>;
  today = Date.now();

  constructor(private db: AngularFirestore,private authService: AuthService,
    private spinnerService: Ng4LoadingSpinnerService,
    private router: Router,private globals: Globals,
    private messageService: MessageService,
    private _location: Location) { 
    this.spinnerService.show();
    
  }

  ngOnInit() {

    this.clientdata = this.db.collection('/clientlist').valueChanges();
    console.log(this.clientdata);
    this.clientdata.subscribe(result => {
      
      this.spinnerService.hide();
      this.globals.clientdata= result;
  

      console.log("Client Data",result);
      if(result.length >= 1){
       this.clientInfo = result[0];
      }
    });
  
    
  }
  closePage(){
    this._location.back();
  }

}
