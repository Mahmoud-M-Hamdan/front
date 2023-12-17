import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpserviceService } from './services/httpservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /**
   *
   */
  constructor(private httpSer: HttpserviceService) {
    httpSer.getToken();
  }
  ngOnInit(): void {
    if (this.httpSer.token) {
      this.httpSer.getUserInfo();
    }
  }
  title = 'ArtGallery';
}
