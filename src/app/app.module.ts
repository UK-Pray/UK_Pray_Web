import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './header/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { CampusPrayComponent } from './pages/campus-pray.component';
import { ContactFormComponent } from './contact/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CampusPrayComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'beliefs', component: AboutComponent},
      { path: 'campus-pray', component: CampusPrayComponent },
      { path: 'signup', component: ContactFormComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' } // change to 404 in future
    ], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
