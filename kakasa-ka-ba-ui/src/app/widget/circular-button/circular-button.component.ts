import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular-button',
  templateUrl: './circular-button.component.html',
  styleUrls: ['./circular-button.component.css']
})
export class CircularButtonComponent implements OnInit {
  @Input() source: string = "";
  @Input() altName: string ="";

  constructor() { }

  ngOnInit(): void {
  }

}
