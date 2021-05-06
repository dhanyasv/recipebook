import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-search',
    templateUrl:'./search.component.html',
    styleUrls:['./search.component.css']
})
export class SearchComponent {
    searchText:String ='';
    @Output() searchValue = new EventEmitter();
    constructor(){

    }
    modelChangeFn(e){
        this.searchValue.emit(this.searchText);
    }
}