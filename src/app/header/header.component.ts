import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  path: string = '';

  constructor(
    private router: Router,
  ) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        this.path = location.pathname

      }


    });
  }

  ngOnInit(): void {
  }

  gotoLink(url: any, pods: Boolean = false, path: string = '') {
    if (pods)

      window.open(`https://app.surfie.pt/${path}/${url.id}`, '_blank')
    else {
      setTimeout(() => {
        window.open(url, '_parent')
      }, 500);
    }
  }

}
