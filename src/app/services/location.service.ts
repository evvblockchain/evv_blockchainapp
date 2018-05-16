import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {} from '@types/googlemaps';
declare let cordova: any;

@Injectable()
export class WindowRef {
  constructor() {}

  getNativeWindow() {
      return window;
  }
}
export class LocationService {

  constructor() {
   
  }

  getCurrentLocation(locationSuccess,locationError){
  
    if (typeof(<any>cordova) !== 'undefined') {

      (<any> navigator).geolocation.getCurrentPosition((value) => {
        //alert(value);
        var locationObj={
          lat:value.coords.latitude,
          long:value.coords.longitude,
        }
        
        return locationSuccess(locationObj)
      
       
      }, 
      (value) => {
        return locationError(value);
      })
    }
  }
   arePointsNear(point1, point2) {
       point1=new google.maps.LatLng(point1.lat,point1.long);
       point2=new google.maps.LatLng(point2.lat,point2.long);
    var sw = new google.maps.LatLng(point2.lat() - 0.0005, point2.lng() - 0.0005);
    var ne = new google.maps.LatLng(point2.lat() + 0.0005, point2.lng() + 0.0005);
    var bounds = new google.maps.LatLngBounds(sw, ne);
    if (bounds.contains (point1))
    	return true;

    return false;
}

}