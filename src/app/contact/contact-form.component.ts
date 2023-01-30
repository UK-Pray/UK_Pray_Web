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


  prayerWarrior: PrayerWarrior = { ...this.originalPrayerWarrior };
  sendPrayerWarrior: PrayerWarrior = { ...this.originalPrayerWarrior };
  postError = false;
  postErrorMessage = '';
  states: Observable<string[]> | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.states = this.dataService.getStates();
  }

  onHttpError(errorResponse: any) {
    console.log("error", errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm){
    console.log(this.sendPrayerWarrior);
    
    if(form.valid) {
      this.dataService.postPrayerWarriorForm(this.sendPrayerWarrior).subscribe(
        {complete: console.info}
      );
    }else{
      this.postError = true;
      this.postErrorMessage = "Fix the above Errors";
    }
  }

}
