import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-we-started',
  templateUrl: './how-we-started.component.html',
  styleUrls: ['./how-we-started.component.scss']
})
export class HowWeStartedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gotoLink(url: any) {
    setTimeout(() => {
      window.open(url, '_parent')
    }, 500);
  }
}
