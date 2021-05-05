import { Component, OnInit } from '@angular/core';
import { Recipe } from './models/Recipe';
import  { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client';
  recipes:Recipe;
  searchText:String ='';
  constructor(private recipeService:RecipeService){

  }
  ngOnInit(){
    this.recipeService.getAllRecipes().subscribe((data:Recipe) => {
      this.recipes = data;
    })
  }

}
