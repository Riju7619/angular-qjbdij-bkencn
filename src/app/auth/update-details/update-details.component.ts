import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router , ActivatedRoute} from '@angular/router';
import { AuditService } from 'src/app/audit.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  id: any;
  users: any = {
    fullName:null,
    email: null,
    contactNo:null,
    gender:null,
  };
  message = '';
  
  updated: boolean=false;
  constructor(public route: ActivatedRoute,private auditervice :AuditService, private router: Router) {  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.auditervice.getUserById(this.id).subscribe(data => {
      this.users = data;
    }, error => console.log(error));
  }

  onSubmit(){
    var update={
      contactNo:this.users.contactNo,
      email:this.users.email,
      fullName:this.users.fullName,
      gender :this.users.gender
    }
    this.auditervice.updateUser(this.id, update).subscribe(
      data=>{
        console.log(data)
        this.message = 'The product was updated!';
        this.updated=true;
      }
    )
  }
}
    

