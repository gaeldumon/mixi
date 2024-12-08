import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import {
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonSearchbar,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonFab,
  IonFabButton,
} from '@ionic/angular/standalone';

import { IngredientCartComponent } from '../ingredient-cart/ingredient-cart.component';

import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';
import { Ingredient } from 'src/app/types/ingredient';

@Component({
  selector: 'app-ingredient-picker',
  templateUrl: './ingredient-picker.component.html',
  styleUrls: ['./ingredient-picker.component.scss'],
  standalone: true,
  imports: [
    NgFor,
    IonList,
    IonItem,
    IonLabel,
    IonCheckbox,
    IonSearchbar,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonFab,
    IonFabButton,
    IngredientCartComponent,
  ],
})
export class IngredientPickerComponent implements OnInit {
  private ingredients: Ingredient[] = [];
  public displayableIngredients: Ingredient[] = [];

  constructor(
    private dataService: DataService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.ingredients = this.dataService.getIngredients();
    this.displayableIngredients = this.dataService.getMostCommonIngredients(10);
  }

  pick(ingredient: Ingredient) {
    this.cartService.handle(ingredient);
  }

  search(event: any) {
    if (event?.detail?.value) {
      this.displayableIngredients = this.ingredients.filter((ingr) =>
        ingr.name.toLowerCase().includes(event.detail.value.toLowerCase())
      );
    } else {
      this.displayableIngredients = this.dataService.getMostCommonIngredients(10);
    }
  }
}
