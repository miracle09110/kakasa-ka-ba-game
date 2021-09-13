import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'next-button',
  templateUrl: './next-button.component.html',
  styleUrls: ['./next-button.component.css']
})
export class NextButtonComponent implements OnInit {

  @Input() value: string = "next"
  @Input() color: string = "#6225E6"

  constructor() { }

  ngOnInit(): void {
  }

}
