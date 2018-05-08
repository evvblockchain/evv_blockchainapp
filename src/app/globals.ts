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
}