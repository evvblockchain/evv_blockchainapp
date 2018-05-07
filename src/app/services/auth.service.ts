import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Http,Headers,RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import { config } from '../config/app.config';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private faceAPiUrl='https://westcentralus.api.cognitive.microsoft.com/face/v1.0/';
constructor(private _firebaseAuth: AngularFireAuth, private router: Router,private http: Http) { 
      this.user = _firebaseAuth.authState;
  }

  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential( email, password );
 return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
 }
 getLoggedInUser(){
   return this._firebaseAuth.auth.currentUser;
 }
 verifyImage(originalImageUrl:string,selfyImage:string):Observable<any>{
 // originalImageUrl=  "http://i.cricketcb.com/stats/img/faceImages/25.jpg";
    const headers=new Headers(config.FaceAPI.JSONtypeHeader);
    const options=new RequestOptions({headers});
    const dataToVerify={
      "faceId1":(selfyImage),
      "faceId2":(originalImageUrl)
    }
    return this.http.post(config.FaceAPI.url+'verify',dataToVerify,options)
    .map(res =>{ 
      return (res.json());
    })
   
 }

 getFaceId(faceImageData:string) : Observable<any[]>{
  const headers=new Headers(config.FaceAPI.OctectTypeHeader);
  const options=new RequestOptions({headers});

  return this.http.post(config.FaceAPI.url+'detect',this._base64ToArrayBuffer(faceImageData),options)
  .map(res =>{ 
   return (res.json());
  });
 
 }
 makeblob(dataURL) {
  var BASE64_MARKER = ';base64,';
  if (dataURL.indexOf(BASE64_MARKER) == -1) {
      var parts = dataURL.split(',');
      var contentType = parts[0].split(':')[1];
      var raw = decodeURIComponent(parts[1]);
      return new Blob([raw], { type: contentType });
  }
  var parts = dataURL.split(BASE64_MARKER);
  var contentType = parts[0].split(':')[1];
  var raw = window.atob(parts[1]);
  var rawLength = raw.length;

  var uInt8Array = new Uint8Array(rawLength);

  for (var i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: contentType });
}
 _base64ToArrayBuffer(base64) {
  var binary_string =  window.atob(base64);
  var len = binary_string.length;
  var bytes = new Uint8Array( len );
  for (var i = 0; i < len; i++)        {
      bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

}