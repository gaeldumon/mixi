import { Component, OnInit } from '@angular/core';

import { NgFor } from "@angular/common";

import {
  IonButton,
  IonModal,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonLabel,
  IonList,
  IonItem
} from '@ionic/angular/standalone';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-ingredient-cart',
  templateUrl: './ingredient-cart.component.html',
  styleUrls: ['./ingredient-cart.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonModal,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonLabel,
    IonItem,
    IonList,
    NgFor
  ],
})
export class IngredientCartComponent implements OnInit {
  public isModalOpen: boolean = false;
  constructor(public cartService: CartService) {}

  ngOnInit() {}
}
