import { Component } from '@angular/core';
import { AuthService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
 
  constructor(  private authService: AuthService ){}
  user:any
  accessDenied:boolean=true;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.user.name= this.authService.getUserEmail()
    // this.user.role= this.authService.getUserRole()
  }
  accessibility(){
    this.authService.getUserRole()=='admin'?this.accessDenied=true:this.accessDenied=false;
  }
}
