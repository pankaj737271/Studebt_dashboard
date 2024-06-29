import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public localStorageRoleKey = 'userRole';
  public localStorageEmailKey = 'userEmail';
  public localStoragePasswordKey = 'userPassword';

  constructor() {
    // Initialize userRole, email, and password from localStorage if available
    const storedRole = localStorage.getItem(this.localStorageRoleKey);
    this.userRole = storedRole ? storedRole : 'user';

    const storedEmail = localStorage.getItem(this.localStorageEmailKey);
    this.userEmail = storedEmail ? storedEmail : '';

    const storedPassword = localStorage.getItem(this.localStoragePasswordKey);
    this.userPassword = storedPassword ? storedPassword : '';
  }

  private userRole: string;
  private userEmail: string;
  private userPassword: string;

  // Get the user role
  getUserRole(): string {
    return this.userRole;
  }

  // Set user role and store it in localStorage
  setUserRole(role: string) {
    this.userRole = role;
   }

  // Get the user email
  getUserEmail(): string {
    return this.userEmail;
  }

  // Set user email and store it in localStorage
  setUserEmail(email: string) {
    this.userEmail = email;
   }

  // Get the user password
  getUserPassword(): string {
    return this.userPassword;
  }

  // Set user password and store it in localStorage
  setUserPassword(password: string) {
    this.userPassword = password;
   }

  // Simulate login as admin
  loginAsAdmin(email: string, password: string) {
    this.setUserRole('admin');
    this.setUserEmail(email);
    this.setUserPassword(password);

  }
  getNameFromEmail(email:any) {
    // Split the email by "@" to separate the local part from the domain
    const localPart = email.split('@')[0];
    
    // Split the local part by digits and special characters
    const namePart = localPart.split(/\d/)[0];
    
    // Split the name part by potential delimiters like "."
    const nameComponents = namePart.split(/[^a-zA-Z]/).filter(Boolean);
    
    // Capitalize the first letter of each component and join them with a space
    const name = nameComponents.map((component:any) => 
      component.charAt(0).toUpperCase() + component.slice(1).toLowerCase()
    ).join(' ');
  
    return name;
  }


  // Simulate login as user
  loginAsUser(email: string, password: string) {
    this.setUserRole('user');
    this.setUserEmail(email);
    this.setUserPassword(password);
  }

  // Simulate logout
  logout() {
    this.setUserRole('user');
    this.setUserEmail('');
    this.setUserPassword('');
  }
}
