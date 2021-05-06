import { Component, Input, OnInit } from "@angular/core";
import { Recipe } from "src/app/models/Recipe";

@Component({
    selector:'recipe',
    templateUrl:'./recipe.component.html',
    styleUrls : ['recipe.component.css']
})
export class RecipeComponent implements OnInit{
    @Input() recipe:Recipe;
    showRecipe:boolean = false;
    constructor(){

    }
    ngOnInit(){
    }
    openRecipe(){
        this.showRecipe = !this.showRecipe;
    }
    closeModal(){
        console.log("dhanya")

        this.showRecipe = false;
    }
    getRecipe(){

    }
}