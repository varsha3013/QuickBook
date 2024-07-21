import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router, private cookieService: CookieService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  submit(): void {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((value) => {
      console.log(value);
      if (value.validYN == 1) {
        this.cookieService.set("token", value.token);
        this.cookieService.set("username", value.username);
        this.cookieService.set("userid", value.userid);
        this.cookieService.set("isLoggedIn", "1");
        this.cookieService.set("user_role", value.user_role);
        this.router.navigate(['/landing']);
      }
    });
  }
}
