import {Injectable} from '@angular/core';

import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import * as firebase from 'firebase';


@Injectable()
export class UserService implements CanActivate {
  userLoggedIn = false;
  loggedInuser: string;
    authUser: any;
   constructor(private router: Router) {
        firebase.initializeApp({
            apiKey: 'AIzaSyCVuyJQC9w1TkF344UCPQJhoGJhAPiKqj4',
            authDomain: 'gigabyte-74b52.firebaseapp.com',
            databaseURL: 'https://gigabyte-74b52.firebaseio.com',
            projectId: 'gigabyte-74b52',
            storageBucket: 'gigabyte-74b52.appspot.com',
            messagingSenderId: '1013182458298'
        })
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        return this.verifyLogin(url);
    }
     verifyLogin(url: string): boolean{
        if (this.userLoggedIn) {return true;}

        this.router.navigate(['/admin/login']);
        return false;
    }
    register(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function(error){
                alert(`${error.message} Please try again!`);
            });
    }
        verifyUser() {
            this.authUser = firebase.auth().currentUser;

            if (this.authUser) {
                alert(`wellcome ${this.authUser.email}`);
                this.loggedInuser = this.authUser.email;
                this.userLoggedIn = true;
                this.router.navigate(['/admin']);
            }
        }
        login(loginEmail: string , loginPassword:  string) {
            firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
                .catch(function(error){
                    alert(`${error.message} Unable to login. try again!`);
                });
        }
            logout() {
                this.userLoggedIn = false;
                firebase.auth().signOut().then(function(){
                    alert(`logged out`);
                }, function (error) {
                     alert(`${error.message} Unable to logout. try again!`);
                });
            }


}
