import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

declare let cordova: any;
declare let  navigator: any;
declare let  Camera: any;
@Injectable()
export class CameraService {

 

  constructor() {
   
  }

  takePicture(cameraSuccess,cameraFailed) {
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
         
          cameraSuccess(value);
        }, 
        (value) => {
            cameraFailed(value);
        },cameraOptions)
    
      }
  }

}