import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  title ='formvalidation';
  submitted = false;
  alert:boolean=false;
  alert1:boolean=false;

  constructor(private formBuilder:FormBuilder, private _http:HttpClient, private router:Router) {
    validators: Validators
   }

  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }
  logIn(){
    this.submitted= true
    if(this.loginForm.invalid){
      return
    }
    this._http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      const user =res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if(user){
        this.alert=true;
        this.loginForm.reset();
        

      }else{
        this.alert1=true;
      }
    },err=>{
      alert("Something Went Wrong")
    })

  }

}