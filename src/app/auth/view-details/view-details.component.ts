import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router , ActivatedRoute} from '@angular/router';
import { AuditService } from 'src/app/audit.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  id: any;
  users: any=[];
  constructor(public router: ActivatedRoute,private auditervice :AuditService, private route: Router) {  }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    
    this.auditervice.getUserById(this.id)
      .subscribe(data => {
        console.log(data)
        this.users = data;
      }, error => console.log(error));
  }

  list(){
    this.route.navigate(['users']);
  }

}
