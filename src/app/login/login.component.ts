import { Component, OnInit } from '@angular/core';
import {SocialAuthService} from 'angularx-social-login';
import {SocialUser, GoogleLoginProvider} from 'angularx-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private authService: SocialAuthService) { }
  user: SocialUser | undefined;
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    })
  }

  signInWithGoogle() : any{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut() : any{
    this.authService.signOut();
  }

}
