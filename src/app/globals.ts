// globals.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Globals {
  role: string = 'test';
  loggedUserFaceId: string='';
   clientdata: any;
   agentData: any;
   checkinDate:any;
   isCheckIn:any;
   checkinEmotion:any;
   isLoggedin:any=false;
   client_comments:any={
     "messages":[
       "Happy",
       "Sad",
       "Average",
       "Neutral",
       "Not punctual",
       "Very Good",
       "Responsible",
       "Kind person",
       "Loved him",
       "Hated him"
     ]
   }
}