import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { PhotoService } from './photo.service';

@Injectable({
  providedIn: 'root',
})
export class HttpserviceService {
  
  user: User|null = null;
  useer: BehaviorSubject<string| null> = new BehaviorSubject<string | null>(null);
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient,private photoSer :PhotoService) {}
  token: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    null
  );
  login(user: any,) {
    this.http.post('https://localhost:5001/api/user/signin', user).subscribe({
      next: (data: any) => {
        // console.log(data['photoUrl']);
        // console.log(this.useer.getValue());
        localStorage.setItem('user', JSON.stringify(data['token']));
        this.getToken();
        this.getUserInfo();
        this.photoSer.getPhotos();

      },
    });
  }

  getToken() {
    let tok = localStorage.getItem('user');
    // console.log('from  getToken', tok);
    if (tok) {
      this.token?.next(JSON.parse(tok));
    }

    // console.log(this.token);
  }

  logout() {
    localStorage.removeItem('user');
    this.token.next(null);
    // console.log('logout!');
    // console.log(this.token.getValue());
  }

  getUserInfo(){
    this.http.get<User>('https://localhost:5001/api/user/account').subscribe({
      next: (data: User) => {
        this.user =data;
        // console.log('from service' , this.user)
        ;}});
  }
}
