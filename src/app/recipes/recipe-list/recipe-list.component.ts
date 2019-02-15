import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
@Output() recipeItemWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe (
      'Aallo Prantha',
      'This is a simple Aallo Prantha Recipe',
      'https://upload.wikimedia.org/wikipedia/commons/3/3c/Msuki.png'
    ),
    new Recipe (
      'Baingan Bharta',
      'This is a simple Baingan Bharta Recipe',
      'https://upload.wikimedia.org/wikipedia/commons/5/53/Maoravyerushalmi.jpeg'
    ),
    new Recipe (
      'Cape Verdean cuisine',
      'This is a simple Cape Verdean cuisine Recipe',
      'https://upload.wikimedia.org/wikipedia/commons/6/64/Cachupa_2.jpg'
    ),
    new Recipe (
      'Bolognese sauce',
      'This is a simple Bolognese sauce Recipe',
      'https://upload.wikimedia.org/wikipedia/commons/8/89/Fettuccine_al_rag%C3%B9_%28image_modified%29.jpg'
    ),
  ];
  onRecipeSelected(selectedRecipeItem: Recipe) {
    this.recipeItemWasSelected.emit(selectedRecipeItem);
  }
  constructor() { }

  ngOnInit() {
  }

}

