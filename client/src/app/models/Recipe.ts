export class Recipe{
    title : String;
    imgSrc: String;
    description : String;
    method : String;
    preparationTime: String;
    nutritions: String;
    ingredients: String;
    constructor($title,$imgSrc,$desc,$method,$prepTim,$nutri,$ing){
        this.title = $title;
        this.imgSrc = $imgSrc;
        this.description = $desc;
        this.method = $method;
        this.preparationTime = $prepTim;
        this.nutritions = $nutri;
        this.ingredients = $ing;
    }
}