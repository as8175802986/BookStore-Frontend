import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;
  constructor(private httpService: HttpService) { }
  signup(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'token'
      })
    }
    return this.httpService.postService('/api/User/register', reqdata, false, header)
  }

  login(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log("login called in user service", data);
    return this.httpService.postService('/api/User/login', data, false, header)

  }
  forgotpassword(data: any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
        
      })
    }
    var url='/api/User/forgotPassword/'+data.EmailId
    return this.httpService.postService(url,null,false,header);
  }

  resetPassword(req:any,token:any){
    console.log("user payload",req);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'token'
      })
    }
    return this.httpService.postService('/api/User/ResetPassword',req, true, {header})
  }
}
