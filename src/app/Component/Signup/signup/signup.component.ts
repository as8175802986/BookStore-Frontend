import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/httpservice/userservise/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  SignupForm: any;
  // formbuilder: any;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private User: UserService) { }

  ngOnInit(): void {
    
    this.SignupForm = this.formBuilder.group({
      FullName: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      PhoneNo: ['', Validators.required],
      
    })
  }

  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.SignupForm.valid) {
      console.log("Regestration method calling", this.SignupForm.value);
        let reqdata = {
          FullName: this.SignupForm.value.FullName,
          Email: this.SignupForm.value.Email,
          Password: this.SignupForm.value.Password,
          PhoneNo: this.SignupForm.value.PhoneNo
        }
        console.log(this.SignupForm.value);
        this.User.signup(reqdata).subscribe((Response: any) => {
          console.log(Response);
        }, (error: any) => {
          console.log(error);
        })
    }
    else 
       {
        return;
      }
     
    }
  

  onReset() {
    this.submitted = false;
    this.SignupForm.reset();
  }
  }

