import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HomeComponent } from './authentication/home/home.component';
import { MaterialsComponent } from './mainpage/materials/materials.component';
import { LanguageComponent } from './mainpage/language/language.component';
import { AssesmentsComponent } from './mainpage/assesments/assesments.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mainpage/language', component: LanguageComponent },
  { path: 'mainpage/materials', component: MaterialsComponent },
  { path: 'mainpage/assesments', component: AssesmentsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
