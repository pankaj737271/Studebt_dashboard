import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm:any; // Ensure it's initialized

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  logout(){
    localStorage.clear()
  }
  
  encodePassword(password: string) {
    // Convert the password to a Base64 string
    return btoa(password);
  }
  
   decodePassword(encodedPassword: string) {
    // Convert the Base64 string back to the original password
    return atob(encodedPassword);
  }
  

  onSubmit() {
    if (this.loginForm && this.loginForm.valid) { // Check if loginForm is initialized and valid
      const email = this.loginForm.get('email')!.value as string;
      const password = this.encodePassword(this.loginForm.get('password')!.value as string);
     
      // Simulate login as admin for demonstration; in a real app, validate credentials
      if (email=='task@gmail.com' && password==this.encodePassword('12345678') ) {
        this.router.navigate(['/landing']);
        this.authService.loginAsAdmin(email, this.encodePassword(password));
        localStorage.setItem('UserDetials',JSON.stringify({"email": email,"password": this.encodePassword(password)}))
      } else {
        this.router.navigate(['/landing']);
        this.authService.loginAsUser(email, this.encodePassword(password));
        localStorage.setItem('UserDetials',JSON.stringify({"email": email,"password": this.encodePassword(password)}))
        
      }
    }
  }
}
