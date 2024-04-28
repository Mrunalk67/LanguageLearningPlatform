import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HomeComponent } from './authentication/home/home.component';
import { EnglishmaterialsComponent } from './mainpage/englishmaterials/englishmaterials.component';
import { LanguageComponent } from './mainpage/language/language.component';
import { EnglishassessmentsComponent } from './mainpage/englishassessments/englishassessments.component';
import { HindimaterialsComponent } from './mainpage/hindimaterials/hindimaterials.component';
import { MarathimaterialsComponent } from './mainpage/marathimaterials/marathimaterials.component';
import { MarathiassessmentsComponent } from './mainpage/marathiassessments/marathiassessments.component';
import { HindiassessmentsComponent } from './mainpage/hindiassessments/hindiassessments.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mainpage/language', component: LanguageComponent },
  { path: 'mainpage/englishmaterials', component: EnglishmaterialsComponent },
  { path: 'mainpage/hindiassessments', component: HindiassessmentsComponent },
  { path: 'mainpage/marathiassessments', component: MarathiassessmentsComponent },
  { path: 'mainpage/englishassessments', component: EnglishassessmentsComponent },
  { path: 'mainpage/hindimaterials', component: HindimaterialsComponent },
  { path: 'mainpage/marathimaterials', component: MarathimaterialsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
