import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HomeComponent } from './authentication/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { OktaAuth } from '@okta/okta-auth-js'
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LanguageComponent } from './mainpage/language/language.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EnglishmaterialsComponent } from './mainpage/englishmaterials/englishmaterials.component';
import { HindimaterialsComponent } from './mainpage/hindimaterials/hindimaterials.component';
import { MarathimaterialsComponent } from './mainpage/marathimaterials/marathimaterials.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MarathiassessmentsComponent } from './mainpage/marathiassessments/marathiassessments.component';
import { HindiassessmentsComponent } from './mainpage/hindiassessments/hindiassessments.component';
import { EnglishassessmentsComponent } from './mainpage/englishassessments/englishassessments.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    LanguageComponent,
    EnglishmaterialsComponent,
    HindimaterialsComponent,
    MarathimaterialsComponent,
    MarathiassessmentsComponent,
    HindiassessmentsComponent,
    EnglishassessmentsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,MatSnackBarModule,
    MatMenuModule,
    MatToolbarModule,MatTabsModule
  ],
  providers: [
    {
      provide: OktaAuth,
      useValue: new OktaAuth({
        issuer: 'https://{yourOktaDomain}/oauth2/default',
        clientId: '{clientId}',
      })
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
