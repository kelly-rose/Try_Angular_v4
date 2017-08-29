import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{
 private req: any;
  videoList: any[];

  constructor(private router:Router,private http: Http) { }

  ngOnInit() {
   this.req= this.http.get('/assets/json/videos.json').subscribe(data => {
      this.videoList = data.json();
    })
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

  preventNormal(event:MouseEvent, image:any){
    if(!image.prevented){
      event.preventDefault();
      this.router.navigate(['/videos'])
    }
  }
}
