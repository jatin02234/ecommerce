import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup = new FormGroup({});
  Signup: any;
  Login: any;

  constructor(private formBuilder:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['',[Validators.required,Validators.email]],
        password: ["",Validators.required]
      }
    )
  }
  Submit(){
    debugger
  localStorage.setItem('Login',JSON.stringify(this.loginForm.value));
  this.Login = JSON.parse(localStorage.getItem('Login') as any);

  this.Signup = JSON.parse(localStorage.getItem('Signup') as any);

  const user= this.Signup.find((a:any)=>{
    return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
  })
  if(user){
    // if(user.role == 'Admin'){
    //   this.router.navigate(['Home/Admin']);
    // }else if(user.role == "User"){
    //   this.router.navigate(['Home/User']);
    // }
    alert( user.role + " Data Logine sucessfully");
    this.router.navigate(['/Home']);
    this.loginForm.reset();
  }else{
    alert('user not found')
  } 
}

//   document(){
//     var modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
//   }
}
