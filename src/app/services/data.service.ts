import { Injectable } from '@angular/core';

import ingredients from '../data/ingredients.json';
import glasses from '../data/glasses.json';
import cocktails from '../data/cocktails.json';

import { Ingredient } from '../types/ingredient';
import { Glass } from '../types/glass';
import { Cocktail } from '../types/cocktail';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getIngredients(): Ingredient[] {
    return ingredients.sort((a, b) => a.name.localeCompare(b.name));
  }

  getGlasses(): Glass[] {
    return glasses.sort((a, b) => a.name.localeCompare(b.name));
  }

  getCocktails(): Cocktail[] {
    return cocktails.sort((a, b) => a.name.localeCompare(b.name));
  }

  getMostCommonIngredients(treshold?: number): Ingredient[] {
    let commons = this.getIngredients().filter((ingr) => ingr.common);
    if (treshold && treshold > 0 && treshold < commons?.length) {
      commons = commons.slice(0, treshold);
    }
    return commons;
  }
}
