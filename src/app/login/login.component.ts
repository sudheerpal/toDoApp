import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from "../http-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn:boolean ;
  registerForm: FormGroup;
  submitted :boolean = false;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]
    });

  }



  constructor(private http:HttpServiceService,private router: Router, private formBuilder: FormBuilder) {
   }

  get f() { return this.registerForm.controls; }



onSubmit() {
  // console.log(this.registerForm);
  this.submitted = true;
  if (this.registerForm.invalid) {
    console.log('validation failed');
      return;    // stop here if form is invalid
  }
  localStorage.setItem("login", 'true');
  this.http.loggedIn.next(true);
  }


}