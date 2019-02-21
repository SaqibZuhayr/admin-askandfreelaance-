import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  Question ;
  ngOnInit() {
    this.fetchQuestions();
  }
  delete_question(id){
    console.log(id);
    this.http.post('http://localhost:3000/deletequestion', {'id':id}).subscribe((data) => {
      this.fetchQuestions();

    });
    
  }
  fetchQuestions() {
    this.http.post('http://localhost:3000/questions', {}).subscribe((data) => {
      console.log(data);
      this.Question = data;
    });
  }

}
