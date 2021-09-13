import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {

  categories = [
    {
      title: "sipnayan",
      value: "sipnayan",
      color: "red"
    },
    {
      title: "siyensia",
      value: "siyensia",
      color: "blue"
    },
    {
      title: "sining at musika",
      value: "sining-at-musika",
      color: "purple"
    },
    {
      title: "hekasi",
      value: "hekasi",
      color: "darkorange"
    },
    {
      title: "jolog-ology",
      value: "jologology",
      color: "green"
    },
  ]

  constructor(private router: Router, private questionService: QuestionService) { }

  ngOnInit(): void {
  }


  click(category: string){
    this.router.navigate(["category", category])
  }

  disabled(category: string){
    return this.questionService.categoryDisabled(category);
  }

  getColor(category: string, color: string){
    if(this.disabled(category)){
      return 'gray'
    } else {
      return color
    }
  }
}
