import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ToastrrService } from '../../core/service/toastr/toastrr.service';
import { StorageService } from '../../core/service/storage/storage.service';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  constructor(
    private router: Router,
    private form: FormBuilder,
    private toastr:ToastrrService,
    private storageService:StorageService
  ) { }

  ngOnInit() {
    this.loginForm = this.form.group({
      email: ['',[ Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      if(email==="abc@gmail.com" && password==="1234567"){
        this.storageService.setWithExpiry("email",email,3600*1000);
         this.router.navigate(["/home/dashboard"]);
      }else{
        this.toastr.error("Invalid Email or Password !")
      }
      
    } else {
      this.toastr.error("Please provide all fields !")
    }
  }
}
