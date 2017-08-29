import {Component, OnInit, OnDestroy} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnDestroy {
  title = "Video List";
  todayDate;
  videoList: any[];
  req: any;
  videoList:[any];

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.todayDate = new Date();
    this.http.get('/assets/json/videos.json').subscribe(data => {
      this.videoList = data.json() as [any];
    })
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

  getEmbedUrl(item) {
    return "https://www.youtube.com/embed/" + item.embed + "?list=PLEsfXFp6DpzQThMU768hTZInWUqfoyTEW";
  }

}
