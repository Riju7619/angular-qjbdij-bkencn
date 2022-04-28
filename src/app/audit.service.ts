import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

//import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
})
export class AuditService {

    constructor(
        private http: HttpClient
    ) { }


    /// Change Password ///
    register(data2: { contactNo: any; email: any; fullName: any; gender: any; password: any; }) {
        //console.log(param)
        return this.http.post(`${environment.apiUrl}/auth/register`, data2);
    }
    login(data2: { email: any; password: any; }) {
        //console.log(param)
        return this.http.post(`${environment.apiUrl}/auth/login`, data2);
    }
    logout() {
        //console.log(param)
        return this.http.post(`${environment.apiUrl}/auth/signout`,{});
    }
}