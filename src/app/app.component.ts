import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';

  constructor(
    private router: Router,

    private titleService: Title,
    private meta: Meta
  ) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        if (location.pathname == '/') {
          this.titleService.setTitle('Surfie | Adventure-hunting nomads. We celebrate freedom and we live our dreams.');

          this.meta.updateTag({ name: 'title', content: 'Surfie | Adventure-hunting nomads. We celebrate freedom and we live our dreams.' })
          this.meta.updateTag({ name: 'description', content: 'Find our favorite spots, build your own HomePod, share experiences, join our social initiatives or stay at our Surfie HUB.' })
          this.meta.updateTag({ name: 'keywords', content: 'Surf, adventure, nomad, digital, coworking, experiences, social, pods, modular house, house, classes, renting, booking, bodyboard, longboard, Caparica, surf house, Portugal, places to stay, stay, spots, beach, lifestyle, community' })


        }
        if (location.pathname == '/how-we-started') {
          this.titleService.setTitle('Surfie | How Surfie was born');

          this.meta.updateTag({ name: 'title', content: 'Surfie | How Surfie was born' })
          this.meta.updateTag({ name: 'description', content: 'We are building a space for open innovation and experiences, where work, leisure and a new lifestyle dynamic can be shared by the Hub residents' })
          this.meta.updateTag({ name: 'keywords', content: 'Surf, adventure, nomad, digital, coworking, experiences, social, pods, modular house, house, classes, renting, booking, bodyboard, longboard, Caparica, surf house, Portugal, places to stay, stay, spots, beach, lifestyle, community' })

        }
        if (location.pathname.includes('pods')) {
          // console.log('current title:::::' + this.titleService.getTitle());
          this.titleService.setTitle('Surfie | pods');
          this.meta.updateTag({ name: 'title', content: 'Surfie | pods' })
          // this.meta.updateTag({ name: 'description', content: 'Find our favorite spots, build your own HomePod, share experiences, join our social initiatives or stay at our Surfie HUB.' })
          // this.meta.updateTag({ name: 'keywords', content: 'Surf, adventure, nomad, digital, coworking, experiences, social, pods, modular house, house, classes, renting, booking, bodyboard, longboard, Caparica, surf house, Portugal, places to stay, stay, spots, beach, lifestyle, community' })

        }
        if (location.pathname == '/become-a-host') {
          this.titleService.setTitle('Surfie | become a host');

          // this.meta.updateTag({ name: 'title', content: 'Surfie | How Surfie was born' })
          // this.meta.updateTag({ name: 'description', content: 'We are building a space for open innovation and experiences, where work, leisure and a new lifestyle dynamic can be shared by the Hub residents' })
          // this.meta.updateTag({ name: 'keywords', content: 'Surf, adventure, nomad, digital, coworking, experiences, social, pods, modular house, house, classes, renting, booking, bodyboard, longboard, Caparica, surf house, Portugal, places to stay, stay, spots, beach, lifestyle, community' })

        }

        if (location.pathname == '/contact') {
          this.titleService.setTitle('Surfie | say hello');


        }


      }


    });


  }

}
