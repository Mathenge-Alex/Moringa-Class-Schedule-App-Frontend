import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email:null,
    password:null,
  };

  isLoggedIn =  false;
  isLoginFailed = false;
  errorMessage = 'Success';

  constructor(private authService: AuthService, private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken())
        this.isLoggedIn = false;

  }
  onSubmit(): void {
    const {email, password} = this.form;
    this.authService.login(email, password).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.router.navigate(["home"]).then(() => {
          window.location.reload();
        });        
        
        console.log(data)
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true
      });
  }

}