import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = "Video List";
  videoList = [
    {
      slug: 1,
      name: "item1",
      embed: "9wc8Gv8X49U"
    },
    {
      slug: 2,
      name: "item2",
      embed: "9wc8Gv8X49U"
    },

    {
      slug: 3,
      name: "item3",
      embed: null
    },
  ];

  constructor(private sanitizer:DomSanitizer) {
  }

  ngOnInit() {
  }

  getEmbedUrl(item){
    return this.sanitizer.bypassSecurityTrustResourceUrl( "https://www.youtube.com/embed/"+item.embed+"?list=PLEsfXFp6DpzQThMU768hTZInWUqfoyTEW");
  }

}
