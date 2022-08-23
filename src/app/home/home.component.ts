import { Component, OnInit } from '@angular/core';
import { Slick } from 'ngx-slickjs';
import { ToastrService } from 'ngx-toastr';
import { PacksService } from '../services/packs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeTab: number = 1
  arrayLength = 1;

  config: Slick.Config = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: 'none',
    nextArrow: 'none',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]


  }
  islod!: boolean;
  properties: any[] = [];
  filterDataList: any[] = [];
  mainfilter = 'open';
  loadinTrns!: boolean;
  allExperiences: any[] = [];

  constructor(private packService: PacksService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getSpotsList();
    this.getAllExperience();

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
  getArray(count: number) {
    return new Array(count)
  }


  getSpotsList() {
    this.islod = true;
    this.packService.getAllSpots(0, { nearBy: '', goodBy: '', region: '' }).subscribe((res: any) => {
      if (!res.error) {
        let o = res.body;
        o.map((item: any) => {
          item.company_logo = item.company_logo ? item.company_logo : '/assets/images/no-img.png';
          item.stakeDate = new Date(item.stake_date)
          item.showStake = this.datePast(item.stakeDate);
          return item;
        });
        this.properties = o;

        // o.map((e: any) => {
        //   this.properties.push(e)
        // })


        this.filterData();

      } else {
        this.toastr.error(res.msg);
      }
      this.islod = false;
    }, (error: any) => {
      this.islod = false;
      this.toastr.error('Oops something went wrong!');
    })
  }

  datePast(stDt: any) {
    let diff = new Date().getTime() - stDt.getTime();
    if (diff > 0)
      return false
    else
      return true
  }
  filterData() {
    let fl = [];
    switch (this.mainfilter) {
      case 'open':
        fl = this.properties.filter(item => item.fund_percentage != 100);
        break;
      case 'myprop':
        fl = this.properties.filter(item => item.is_invested > 0);
        break;
      case 'closed':
        fl = this.properties.filter(item => item.fund_percentage == 100);
        break;
    }

    this.filterDataList = fl;
  }

  getAllExperience() {
    this.loadinTrns = true;
    this.packService.loadExperience({ allTYPE: '', daytimeBy: '', langBy: '' }).subscribe(response => {
      if (!response['error']) {
        this.allExperiences = response.body



      }
      else {
        this.toastr.error(response['msg']);
      }
      this.loadinTrns = false;

    }, error => {
      this.toastr.error(error);
    });
  }

  goOnInsta(profile: any) {
    window.open(`https://www.instagram.com/${profile.replace(/[@]/g, '')}`, "_blank")
  }


}
