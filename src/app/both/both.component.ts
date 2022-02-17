import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-both',
  template: `
    <p class="both">
      both works!
    </p>
  `,
  styles: [
    `.both{color:blue}`
  ]
})
export class BothComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
