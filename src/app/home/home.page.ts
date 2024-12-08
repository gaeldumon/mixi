import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

import { DataService } from '../services/data.service';

import { LogoComponent } from '../components/logo/logo.component';
import { IngredientPickerComponent } from './../components/ingredient-picker/ingredient-picker.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, LogoComponent, IngredientPickerComponent],
})
export class HomePage {
  constructor(private dataService: DataService) {}
}
