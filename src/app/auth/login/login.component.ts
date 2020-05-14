<<<<<<< HEAD
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
=======
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
>>>>>>> 8e2c8daecafee80adf2baedd9d851df5b8d9bf7a

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

<<<<<<< HEAD
export class LoginComponent{
  isLoading = false;

  constructor(public authService: AuthService) {}

=======
export class LoginComponent implements OnInit, OnDestroy{
  isLoading = false;
  private authStatusSub: Subscription;

  constructor(public authService: AuthService) {}

  ngOnInit(){
    this.authStatusSub = this.authService.getAuthStatusListener()
      .subscribe(
        authStatus => {
          this.isLoading = false;
        }
      );
  }

>>>>>>> 8e2c8daecafee80adf2baedd9d851df5b8d9bf7a
  onLogin(form: NgForm){
    if(form.invalid){
      return;
    }
    this.isLoading = true;
    this.authService.login(form.value.email, form.value.password);
  }
<<<<<<< HEAD
=======

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }
>>>>>>> 8e2c8daecafee80adf2baedd9d851df5b8d9bf7a
}
