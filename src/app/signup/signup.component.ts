import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppserviesService } from '../appservies.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  roles = [ 'User' , 'Admin']
  userData:any[]=[];
  signUpForm: FormGroup = new FormGroup({});
  constructor(public formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(
      {
        firstname: ["Jatin", Validators.required],
        lastname: ["Patel", Validators.required],
        email: ["", [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        password: ["", Validators.required],
        cpassword: ["", Validators.required],
        role:["",Validators.required]
      },
      {
        validator: this.ConfirmPasswordValidator("password", "cpassword")
      }
    );
  }

  onSubmit() {
    let users:any = this.signUpForm.value;
    this.userData = JSON.parse(localStorage.getItem('Signup') as any);
    if (this.userData) {
    //   private getSelectedIndex(id: string) {
    //     for (var i = 0; i < this.products.length; i++) {
    //         if (this.products[i].id == id) {
    //             return i;
    //         }
    //     }
    //     return -1;
    // }
    
      let data = this.userData.findIndex((data: any) =>
        data.email == users.email )
      if (data != -1) {
       alert('This Data is already Exits')
      }
      else
      {  
        this.userData.push(users);
        localStorage.setItem('Signup', JSON.stringify(this.userData));
      }
      } else {
      this.userData = []
      this.userData.push(users);
      localStorage.setItem('Signup', JSON.stringify(this.userData));
    }
    this.router.navigate(['/']);
    
  }
  ConfirmPasswordValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      let control = formGroup.controls[controlName];
      let matchingControl = formGroup.controls[matchingControlName]
      if (
        matchingControl.errors &&
        !matchingControl.errors["confirmPasswordValidator"]
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPasswordValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
  onlog(){
    this.router.navigate([''])
  }
}

