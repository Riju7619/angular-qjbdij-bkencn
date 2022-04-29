import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { UpdateDetailsComponent } from '../auth/update-details/update-details.component';

const authRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {path: 'details/:id', component: ViewDetailsComponent},
  {path: 'users', component: AdminComponent},
  {path: 'update-user/:id', component: UpdateDetailsComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/