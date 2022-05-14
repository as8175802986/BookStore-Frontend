import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/httpservice/userservise/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgetPasswordForm!:FormGroup;
  submitted=false;

  constructor(private formBuilder: FormBuilder,private User: UserService) { }

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      EmailId: ['',[Validators.required, Validators.email] ]
      
    });
  }
  onForgetSubmit(){
    
   
    this.submitted=true;
    if (this.forgetPasswordForm.valid) {
      console.log("forgetpassword form calling", this.forgetPasswordForm.value);
      let req={
        EmailId:this.forgetPasswordForm.value.EmailId
        
        
      }
      console.log(req);
      console.log(this.forgetPasswordForm.value);
      this.User.forgotpassword(req).subscribe((res:any)=>{
        console.log(res);
      })
    
    }
    else {
      console.log("Email or phone number is necessory", this.forgetPasswordForm.value);
      return;
    }
  }
  }


