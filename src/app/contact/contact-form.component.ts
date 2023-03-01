import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from './data/data.service';
import { PrayerWarrior } from './data/prayer-warrior';

@Component({
  selector: 'pm-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  originalPrayerWarrior: PrayerWarrior = {
    firstName: "",
    lastName: "",
    email: "",
    church: "",
    city: "",
    state: ""
  };


  prayerWarrior: PrayerWarrior = { ...this.originalPrayerWarrior };
  sendPrayerWarrior: PrayerWarrior = { ...this.originalPrayerWarrior };
  postSuccess = false;
  postFailure = false;
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
    console.log(this.prayerWarrior);
    
    if(form.valid) {
      this.dataService.postPrayerWarriorForm(this.prayerWarrior).subscribe((res) => {
        console.log("Successfully sent email.");
        this.postSuccess = true;
    
      }, (err) => {
        alert("There was an issue from our end. Try again later.");
        this.postFailure = true;
      });
    }else{
      this.postError = true;
      this.postErrorMessage = "Fix the above Errors";
    }
  }

}
