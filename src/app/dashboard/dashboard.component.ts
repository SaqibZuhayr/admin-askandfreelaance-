import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  data;
  ngOnInit() {
    this.fetchingData();

  }
  fetchingData(){
    this.http.post('http://localhost:3000/adminDashboard', {}).subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }

}
