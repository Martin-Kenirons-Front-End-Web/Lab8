import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, 
  IonToolbar, IonButton, IonButtons, IonBackButton,
  IonItem, IonLabel, IonList, IonRadio, IonRadioGroup } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status', // Component selector used in HTML
  templateUrl: './status.page.html', // Path to the HTML template
  styleUrls: ['./status.page.scss'], // Path to the SCSS styles
  standalone: true, // Indicates this component is standalone
  imports: [IonRadioGroup, IonRadio, IonItem, IonLabel, IonList, 
    IonBackButton, IonButtons, IonButton, IonContent,
     IonHeader, IonTitle, IonToolbar, CommonModule, 
     FormsModule] // Modules and components imported for use in this component
})
export class StatusPage implements OnInit {
  myStatus: string = ''; // Variable to store the status

  constructor(private storage: Storage, // Injecting Storage service
              private router: Router) { } // Injecting Router service

  // Method triggered on button click
  async onButtonClick() {
    console.log(this.myStatus); // Log the current status to the console
    await this.storage.create(); // Initialize the storage
    await this.storage.set('status', this.myStatus); // Save the status in storage
    this.router.navigate(['/home']); // Navigate to the home page
  }

  // Lifecycle hook triggered when the view is about to enter
  async ionViewWillEnter() {
    await this.storage.create(); // Initialize the storage
    this.myStatus = await this.storage.get('status'); // Retrieve the status from storage
  }

  // Lifecycle hook triggered on component initialization
  ngOnInit() {
  }
}
