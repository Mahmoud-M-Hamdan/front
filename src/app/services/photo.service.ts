import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpserviceService } from './httpservice.service';

@Injectable({
  providedIn: 'root'
})



export class PhotoService {


  arr:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) {}

  uploadPhoto(file: File): Observable<any> {
    const formData: FormData = new FormData();
    console.log(file);
    formData.append('file', file, file.name);

    // const headers = new HttpHeaders({
    //   'Authorization' : 'Bearer ' +  this.httpSer.token.getValue()
    // });
    // You may need to set headers if required by your backend

    return this.http.post(`https://localhost:5001/api/user/addphoto`, formData, 
    
    // { headers }
    );
  }


  getPhotos(){
    return this.http
      .get(
        'https://localhost:5001/api/user/get_photo'
        // ,{headers:{
        //   'Authorization': 'bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJsb2xvIiwibmJmIjoxNzAxNjA5MTM3LCJleHAiOjE3MDIyMTM5MzcsImlhdCI6MTcwMTYwOTEzN30.tyRk7To61FbeiXpZMYEduaHbadkE6C4SL4DHjpDh4pzGYGDgMJ3d_xp50x0L8HRPX1VDH22hdHWFLQ9PMK1vUQ'
        // }}
      )
      .subscribe({
        next: (data) => {
          
          // console.log(`This is console message ${data}`);
          this.arr.next(data);
        },
      });
  }
}