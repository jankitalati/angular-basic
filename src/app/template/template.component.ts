import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  template: `
    <p class="custom">
      template works!
    </p>
  `,
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
