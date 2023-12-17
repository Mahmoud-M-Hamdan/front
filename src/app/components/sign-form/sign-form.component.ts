import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.css']
})
export class SignFormComponent {
  sign :string = 'in'; 



  changeSign(){
    this.sign = this.sign === 'in' ? 'up' : 'in';
  }

  Signin(f:NgForm){
    console.log('signin');
    console.log(f.value);
  }
  Signup(f:NgForm){
    console.log('signup');
  //  f.value.email="eeee";
   console.log(f.value);
   f.reset();
  }

  cleanForm(f:NgForm){
f.reset();
  }
}
