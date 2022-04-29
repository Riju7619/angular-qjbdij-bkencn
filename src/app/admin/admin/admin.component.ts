import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AuditService } from 'src/app/audit.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  users: any=[];

  constructor(public router: Router,private auditervice :AuditService) {  }
 
  ngOnInit(): void {
    this.getAllUsers();
  }

  userDetails(id: number){
    this.router.navigate(['details', id]);
  }

  private getAllUsers(){
    this.auditervice.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(id: number){
    this.auditervice.deleteUser(id).subscribe( data => {
      console.log(data);
      this.getAllUsers();
    })
  }

  updateUser(id: number){
    this.router.navigate(['update-user', id]);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/