import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignFormComponent } from './components/sign-form/sign-form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'auth', component:SignFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
