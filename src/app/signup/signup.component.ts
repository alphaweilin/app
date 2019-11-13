import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userSinup = true;
  mentorSinup = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  userSignup(): void {
    this.userSinup = true;
    this.mentorSinup = false;
  }

  mentorSignup(): void {
    this.userSinup = false;
    this.mentorSinup = true;
  }

  signup(): void {
    this.router.navigateByUrl('/login');
  }

}
