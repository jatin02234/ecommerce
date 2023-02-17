
export class authService{
//     loggedIn = false;
//   authenticated: any;

// isAuthenthicated(){
//     const promise = new Promise(
//         (resolve,_reject) => {

//                 resolve(this.loggedIn);
            
//         }
//     );
//      return promise;
// }
// login(){
//     this.loggedIn = true;
// }
// logout(){
//     this.loggedIn = false;
// }

    loggedin(){
        return localStorage.getItem('Login');
    }
}













































































//    loggedin = false;

// isauthcarded(){
//     const promise = new Promise(
//         (resolve: (arg0: boolean) => void,_reject: any) => {
//             setTimeout(() => {
//                 resolve(this.loggedin);
//             }, 100);
//         }
//     );
//     return promise;
// }
// login(){
//     this.loggedin = true;
// }
// logout(){
//     this.loggedin = false;
// }
// }