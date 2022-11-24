
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup
  alert:boolean=false
  alert1:boolean=false


  constructor(private formBuilder: FormBuilder,  private _http: HttpClient,  private router: Router, private formsModule: FormsModule) {
    validators: Validators
   }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['',[Validators.required,Validators.minLength(4), Validators.maxLength(24),Validators.pattern('^[a-zA-Z]+$')]],
      email: ['',[Validators.required,Validators.email]],
      mobile: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['',[Validators.required,Validators.minLength(6),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
    })
  }
  signUp() {
    this._http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      const user =res.find((a:any)=>{
        return a.email === this.signupForm.value.email
      })
      if(user){
        this.alert1=true;
      }
      else{
        this._http.post<any>("http://localhost:3000/signup", this.signupForm.value).subscribe(res => {
      this.alert=true;

      this.signupForm.reset();
      
        })
      }


    }, err => {
      alert("Something Went Wrong")
    });

  }


}







   /* ....
    this._http.post<any>("http://localhost:3000/signup", this.signupForm.value).subscribe(res => {
      alert("Registration Successfull")

      this.signupForm.reset();
      this.router.navigate(['login'])


    }, err => {
      alert("Something Went Wrong")
    });

  }


} */