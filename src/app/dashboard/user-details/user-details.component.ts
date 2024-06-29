import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
constructor(private $auth: AuthService){}

accessDenied:boolean = false;
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
}

}
