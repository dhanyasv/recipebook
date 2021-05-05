import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from'rxjs';
import { Recipe } from '../models/Recipe';

@Injectable({
    providedIn:'root'
})
export class RecipeService {
    url = 'http://localhost:3000/recipes';
    constructor(private http: HttpClient){

    }
    getAllRecipes(){
        return this.http.get<Recipe>(this.url);
    }
}