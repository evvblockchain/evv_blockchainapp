import { Component,OnInit } from '@angular/core';
import { Globals } from './globals';
declare var device;
declare let  navigator: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private globals: Globals){

  }
  ngOnInit() {
      document.addEventListener("deviceready", onDeviceReady, false);
          function onDeviceReady() {
      
         
             //alert(device.platform);
             document.addEventListener("backbutton", handleBackButtonTrigger, false);
             function handleBackButtonTrigger(){
              if(confirm("Are you sure you want to exit?")) {
                navigator.app.exitApp(); 
            }
                 
            }
          }

  }
 
  
  }
