import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe ('Test recipe', 'This ia a simple recipe guide', 
        'https://live.staticflickr.com/5496/31479301445_cb53c0f4e9_b.jpg'),
        
        new Recipe ('Another recipe', 'This ia a simple recipe guide', 
        'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg')
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}