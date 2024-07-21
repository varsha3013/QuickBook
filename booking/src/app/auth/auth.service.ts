import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../shared/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userId: any;

  constructor(private http:HttpClient) 
  {
    
  }

  register(body:any):Observable<any>
  {
    return this.http.post(APP_CONSTANTS.BACKEND_URL +'register',body);
  }

  login(body:any):Observable<any>
  {
    return this.http.post(APP_CONSTANTS.BACKEND_URL +'login',body);
  }


  // getUsers():Observable<any>
  // {
  //   // with credentials true will send all your credentials like cookies to 
  //   return this.http.get(APP_CONSTANTS.BACKEND_URL +'users',{withCredentials:true})
  // }


  sendEmail(email:String):Observable<any>
  {

  return this.http.post(APP_CONSTANTS.BACKEND_URL +'send-email',{email});

  }


  validateFpToken(token:String):Observable<any>
  {


  return this.http.post(APP_CONSTANTS.BACKEND_URL +'validate-fp-token',{token});

  }



  setPassword(password:String,token:String):Observable<any>
  {

  return this.http.post(APP_CONSTANTS.BACKEND_URL +'reset-pwd',{password,token});

  }

  sendBooking(data:any):Observable<any>
  {
    return this.http.post(APP_CONSTANTS.BACKEND_URL+'cleaning',data);
  }


  registerWorker(body:any):Observable<any>
  {
    return this.http.post(APP_CONSTANTS.BACKEND_URL +'register-worker',body);
  }


}