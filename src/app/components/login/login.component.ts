import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/APISERVICES/UsersService';
import { AuthService } from 'src/app/authService/authService';


@Component({
  selector: 'app-login', // Component selector for usage in templates
  templateUrl: './login.component.html', // Path to the HTML template
  styleUrls: ['./login.component.css'] // Path to the CSS styles
})
export class LoginComponent {
  loginForm: UntypedFormGroup; // Form group to manage the login form's state

  constructor(private fb: UntypedFormBuilder, private userSer :UserService, private route: Router, private authService: AuthService) {
    // Initializing the login form with form controls
    this.loginForm = this.fb.group({
      email: [
        '', 
        [
          Validators.required, // Email field is required
          Validators.email // Must be a valid email format
        ]
      ],
      password: [
        '', 
        [
          Validators.required, // Password field is required
          Validators.minLength(6) // Minimum password length is 6 characters
        ]
      ]
    });
  }

  /**
   * Function triggered on form submission.
   * It checks if the form is valid and processes the input data.
   */
  onSubmit() {
    if (this.loginForm.valid) {
      // Output the form data to the console (for testing purposes)
      console.log('Form submitted successfully:', this.loginForm.value);
      let loginData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      // Add your actual login logic here, e.g., API call
      this.userSer.getUser().subscribe(
        (res :any[]) =>{
          let user = res.find(
            (u) => u.email === loginData.email && u.password === loginData.password
          );

          if(user){
            alert("Succsess");
            sessionStorage.setItem('IsAdmin', user.isAdmin ? "admin" : "user")
            sessionStorage.setItem('UserName', user.fullName)
            sessionStorage.setItem('id', user.userId);
            const isAdmin = true; // Replace with real login validation logic
            this.authService.updateAdminStatus(isAdmin);
            this.route.navigate(['/home']);

          }
        },
        error => console.error('Login failed', error)
      );
      
    } else {
      console.error('Form is invalid:', this.loginForm.errors);
    }
  }
}
