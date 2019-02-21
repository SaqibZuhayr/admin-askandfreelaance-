import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  users ;
  ngOnInit() {
    this.fetchUsers();
  }
  delete_user(id) {
    console.log(id);
    this.http.post('http://localhost:3000/deleteuser', {'id':id}).subscribe((data) => {
      this.fetchUsers();

    });


  }
  fetchUsers(){
    this.http.post('http://localhost:3000/fetchusers', {}).subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }

}
