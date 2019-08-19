import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../profile.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  userProfile: object;
  
  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.userProfile = this.profileService.getUserProfile();
  }

  updateProfile(form: NgForm): void {
    let newObject = {
      name: form.value.name,
      contactInfo: form.value.contactInfo,
      bio: form.value.bio
    }
    this.profileService.setUserProfile(newObject);
  } 
}
