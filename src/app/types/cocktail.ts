import { Glass } from './glass';
import { Ingredient } from './ingredient';

export interface Cocktail {
  name: string;
  category?: string;
  ingredients: {
    unit?: string;
    amount?: number;
    ingredient?: Ingredient['name'];
    label?: string;
    special?: string;
  }[];
  glass?: Glass['name'];
  garnish?: string;
  preparation?: string;
}
