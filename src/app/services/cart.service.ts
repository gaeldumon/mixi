import { Injectable } from '@angular/core';
import { Ingredient } from '../types/ingredient';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Ingredient[] = [];

  constructor() {
    this.cart = [];
  }

  public getCart(): Ingredient[] {
    return this.cart;
  }

  public handle(ingredient: Ingredient) {
    if (!this.cart.find((ingr) => ingr.name === ingredient.name)) {
      this.add(ingredient);
    } else {
      this.remove(ingredient);
    }
  }

  private add(ingredient: Ingredient) {
    this.cart.push(ingredient);
  }

  private remove(ingredient: Ingredient) {
    this.cart = this.cart.filter((ingr) => ingr.name !== ingredient.name);
  }
}
