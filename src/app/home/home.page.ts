import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, 
  IonContent, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home', // Defines the custom HTML tag for this component
  templateUrl: 'home.page.html', // Path to the HTML template for this component
  styleUrls: ['home.page.scss'], // Path to the SCSS styles for this component
  imports: [RouterLink, IonButton, IonHeader, IonToolbar, IonTitle, IonContent], // Specifies the modules and components to import
})
export class HomePage {
  myStatus: string = ""; // Variable to store the status retrieved from storage

  constructor(private storage: Storage) {} // Injects the Storage service for managing local storage

  // Lifecycle hook that runs when the page is about to enter and become active
  async ionViewWillEnter() {
    await this.storage.create(); // Initializes the storage engine
    this.myStatus = await this.storage.get('status'); // Retrieves the 'status' value from storage and assigns it to myStatus
  }
}
