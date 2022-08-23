import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PacksService } from '../services/packs.service';

@Component({
  selector: 'app-pods',
  templateUrl: './pods.component.html',
  styleUrls: ['./pods.component.scss']
})
export class PodsComponent implements OnInit {

  loadinTrns: boolean = false;
  allPods: any[] = [];
  videoData: any[] = [];
  openModalVideo: boolean = false;

  constructor(
    private packService: PacksService,
    private toastr: ToastrService
  ) {
    this.getAllsurPods();
  }

  ngOnInit(): void {
  }

  gotoLink(url: any, pods: Boolean = false) {
    if (pods)

      window.open(`https://app.surfie.pt/surfie-pods/surfiePod-details/${url.id}`, '_blank')
    else {
      setTimeout(() => {
        window.open(url, '_parent')
      }, 500);
    }
  }

  getAllsurPods() {
    this.loadinTrns = true;
    this.packService.loadSurPods().subscribe(response => {
      if (!response['error']) {
        this.allPods = response.body
      }
      else {
        this.toastr.error(response['msg']);
      }
      this.loadinTrns = false;

    }, error => {
      this.toastr.error('Oops something went wrong');
    });
  }

  openVideoModal(allVids: any) {
    this.getCourseData(allVids);
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('modal-open');
    this.openModalVideo = true
  }

  getCourseData(allvideo: any) {
    this.videoData = [];
    allvideo.map((item: any) => {
      if (item.video_url) {
        item.selected = false;
        item.url_type = item.video_url.toLocaleLowerCase().indexOf('<iframe') > -1 ? 'iframe' : 'url';
        this.videoData.push(item);
      }
      return item;
    });
    if (this.videoData && this.videoData.length > 0) {
      this.videoData[0].selected = true;
    }
  }

  changeVideo(id: any) {
    this.videoData.map(item => {
      if (item.id == id) {
        item.selected = true;
      } else {
        item.selected = false;
      }
      return item;
    });
  }

  closeModel() {
    this.openModalVideo = false
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('modal-open');

  }

  goto3dLink(url: any) {
    if (url)
      window.open(url, '_blank')
  }


}
