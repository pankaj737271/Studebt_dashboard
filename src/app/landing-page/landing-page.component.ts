import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  userEmail: any;
  userRole: String='user';
  sidebarExpanded: boolean=true;
  constructor(private authService: AuthService){}
  onlyAdmin:any
  ngOnInit(): void {
    this.userEmail = this.authService.getUserEmail();
    this.userRole = this.authService.getUserRole();
    
  }
   
  toggleSidebar(): void {
    this.sidebarExpanded = !this.sidebarExpanded;
  }

  logout(): void {
    localStorage.clear()
    console.log("cleared");
    
  }

}
