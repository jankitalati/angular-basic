import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styles: [
    `.color{color:red}`
    
  ]
})
export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
