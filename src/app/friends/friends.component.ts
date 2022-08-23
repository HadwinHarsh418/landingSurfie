import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gotoLink(url: any) {
    setTimeout(() => {
      window.open(url, '_parent')
    }, 500);
  }
}
