import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuditService } from 'src/app/audit.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  message: string;
  form: any = {
    email: null,
    password: null
  };
  msg: any;
  msg2: any;
  loggedIn: boolean=this.authService.isLoggedIn;
  constructor(public authService: AuthService, public router: Router,private data :AuditService) {
    this.message = this.getMessage();
  }

  getMessage() {
    return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
  onSubmit(){
    var register={
      email:this.form.email,
      password :this.form.password
    }
   
    this.data.login(register).subscribe(
      data=>{
        console.log(data)
        this.msg = data;
        this.msg2=this.msg.message;
        console.log(this.msg2.message);
        this.loggedIn=true;
      }
  )
  this.authService.login().subscribe(() => {
    this.message = this.getMessage();
    
  });
    console.log(this.form)
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
    this.data.logout().subscribe(
      data=>{
        console.log(data)
        this.msg = data;
        this.msg2=this.msg.message;
        console.log(this.msg2.message);
        this.loggedIn=true;
        this.form={};
        this.loggedIn=false;
        this.authService.logout();
      }
  )
  
    this.message = this.getMessage();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
