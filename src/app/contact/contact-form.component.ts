import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from './data/data.service';
import { PrayerWarrior } from './data/prayer-warrior';
import * as CryptoJS from 'crypto-js'

@Component({
  selector: 'pm-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  originalPrayerWarrior: PrayerWarrior = {
    firstname: "",
    lastname: "",
    email: "",
    church: "",
    city: "",
    state: ""
  };

  password = '1234567812345678';

  prayerWarrior: PrayerWarrior = { ...this.originalPrayerWarrior };
  sendPrayerWarrior: PrayerWarrior = { ...this.originalPrayerWarrior };
  postError = false;
  postErrorMessage = '';
  states: Observable<string[]> | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.states = this.dataService.getStates();
  }

  encrypt(message: string) {
    return CryptoJS.AES.encrypt(message.trim(), this.password.trim()).toString();
  }

  onHttpError(errorResponse: any) {
    console.log("error", errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm){
    this.sendPrayerWarrior.firstname = this.encrypt(this.prayerWarrior.firstname);
    this.sendPrayerWarrior.lastname = this.encrypt(this.prayerWarrior.lastname);
    this.sendPrayerWarrior.email = this.encrypt(this.prayerWarrior.email);
    this.sendPrayerWarrior.church = this.encrypt(this.prayerWarrior.church);
    this.sendPrayerWarrior.city = this.prayerWarrior.city;
    this.sendPrayerWarrior.state = this.prayerWarrior.state;
    console.log(this.sendPrayerWarrior);
    
    if(form.valid) {
      this.dataService.postPrayerWarriorForm(this.sendPrayerWarrior).subscribe(
        result => console.log("Success", result),
        error => this.onHttpError(error)
      );
    }else{
      this.postError = true;
      this.postErrorMessage = "Fix the above Errors";
    }
  }

}
