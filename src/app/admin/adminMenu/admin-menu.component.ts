import { Component, OnInit } from '@angular/core';
import { UserService } from '../adminShared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<h1>logged in</h1>',
  // templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})

export class AdminMenuComponent implements OnInit {
  theUser: string;
  constructor(private userSVC: UserService, private router: Router) {}
  ngOnInit(): void {
    this.theUser = this.userSVC.loggedInuser;
  }
  logout() {
    this.userSVC.logout();
    this.router.navigate(['']);
  }

}
