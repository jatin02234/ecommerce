import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { authService } from './auth.servise';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authservice:authService, private router:Router){}
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>{
    if(this.authservice.loggedin()){
      return true;
    }
    else{
      this.router.navigate(['login']);
      return false;
    }
}
}






// canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot){
//       // const  =this.authservice.isauthcarded
//     const currentUser=this.authservice.isauthcarded;
//       // (currentUser) =>{
//         if(currentUser){
//            if (route.data['roles'] && route.data['roles'].indexOf(currentUser.role) === -1){
//             this.router.navigate(['/']),
//           return false;
//            }
//           else{
//           return true;
//         }
        
//         // }
//       }
//     );
//   }