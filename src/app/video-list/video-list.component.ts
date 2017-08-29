import {Component, OnInit} from '@angular/core';

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
      embed: `<iframe width="560" height="315" src="https://www.youtube.com/embed/9wc8Gv8X49U?list=PLEsfXFp6DpzQThMU768hTZInWUqfoyTEW" frameborder="0" allowfullscreen></iframe>`
    },
    {
      slug: 2,
      name: "item2",
      embed: `<iframe width="560" height="315" src="https://www.youtube.com/embed/9wc8Gv8X49U?list=PLEsfXFp6DpzQThMU768hTZInWUqfoyTEW" frameborder="0" allowfullscreen></iframe>`
    },

    {
      slug: 3,
      name: "item3",
      embed: `<iframe width="560" height="315" src="https://www.youtube.com/embed/9wc8Gv8X49U?list=PLEsfXFp6DpzQThMU768hTZInWUqfoyTEW" frameborder="0" allowfullscreen></iframe>`
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
