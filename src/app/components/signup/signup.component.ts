import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/APISERVICES/UsersService'; // Import your service
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private apiService: UserService, private router: Router) {
    this.signupForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(g: UntypedFormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null
      : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;

      const payload = {
        FullName: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword // Include confirmPassword
      };

      this.apiService.createUser(payload).subscribe({
        next: (response) => {
          console.log('User registered successfully:', response);

          sessionStorage.setItem("UserName",response.fullName);
          sessionStorage.setItem("IsAdmin",response.isAdmin);
          this.router.navigate(['/home']); 
          // Add any success logic here (e.g., redirect or show success message)
        },
        error: (err) => {
          console.error('Error during signup:', err);
          // Handle error (e.g., display error message)
        }
      });
    }
  }
}
