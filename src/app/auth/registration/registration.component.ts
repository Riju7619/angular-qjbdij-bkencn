import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuditService } from 'src/app/audit.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  message: string;
  form: any = {
    fullName:null,
    email: null,
    password: null,
    contactNo:null,
    gender:null,
  };
  msg2: any;
  msg: any;
  registered: boolean=false;
  loggedIn:boolean=this.authService.isLoggedIn;
  constructor(public authService: AuthService, public router: Router, private data :AuditService) {
    this.message = this.getMessage();
    
  }

  getMessage() {
    return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
  onSubmit(){
    var register={
      contactNo:this.form.contactNo,
      email:this.form.email,
      fullName:this.form.fullName,
      gender :this.form.gender,
      password :this.form.password
    }
    this.data.register(register).subscribe(
      data=>{
        console.log(data)
        this.msg = data;
        this.msg2=this.msg.message;
        console.log(this.msg2.message);
        this.registered=true;
        
      }
  )
    console.log(this.form.fullName)
     }
  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.message = this.getMessage();
      if (this.authService.isLoggedIn) {
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        const redirectUrl = '/admin';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true,
        };

        // Redirect the user
        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.message = this.getMessage();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
