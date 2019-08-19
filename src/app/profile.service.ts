import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userProfile: object =
  {
    name: "Sabrina",
    contactInfo: "sabsbrooks@gmail.com",
    bio: "Me, myself and I"
  };

  constructor(private router: Router) {}

  getUserProfile(): object {
    return this.userProfile;
  }

  setUserProfile(formData: object): any {
    this.userProfile = formData;
  }

  editProfile(): void {
    this.router.navigate(["edit"]);
  }
}
