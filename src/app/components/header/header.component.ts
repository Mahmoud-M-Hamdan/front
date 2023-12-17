import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/interfaces/user.interface';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  
  
  $user:User|null = null;
  
  photoUrl = this.$user?.photoUrl; 
  constructor(public httpSer: HttpserviceService) {
    // this.$user=this.httpSer.user.getValue(); 
    // console.log('from constructor ',this.httpSer.user.getValue() );
    console.log(this.$user?.photoUrl);
    console.log('photoUrl',this.photoUrl);
  }

  onLogin(f: NgForm) {
    console.log(f.value);
    this.httpSer.login(f.value);
  }

  logout() {
    this.httpSer.logout();
  }
}
