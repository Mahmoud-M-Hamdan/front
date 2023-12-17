import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { PhotoService } from 'src/app/services/photo.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  /**
   *
   */

  arr: any;
  constructor(public photoService: PhotoService,public httpSer:HttpserviceService,private toastr: ToastrService) {
    photoService.getPhotos()
  }
  ngOnInit(): void {
  }


}
