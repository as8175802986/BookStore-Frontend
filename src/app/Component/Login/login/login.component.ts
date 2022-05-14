import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/httpservice/userservise/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  submitted = false;
  EmailId:any
  password:any
  token:any
  MailId:any
  user='1';

  constructor(private formbuilder: FormBuilder, private User: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]

    })
    localStorage.setItem("SessionUser",this.user)
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.valid) {

      let reqdata = {
        EmailId: this.loginForm.value.Email,
        Password: this.loginForm.value.Password,
      }
      console.log(reqdata);
      this.User.login(reqdata).subscribe((Response: any) => {
        console.log(Response);
        console.log(this.EmailId);
        console.log(this.password);
        // localStorage.setItem("token", Response.id)
        
        
      }, 
      (error: any) => {
        console.log(error);
      }
      )
    }
  }
}
