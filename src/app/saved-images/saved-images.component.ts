import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
// 1b. Store, this will be injected in the constructor
import { Store } from "@ngrx/store";
// 1c. Person object
// import { Search } from "./../models/app.search.model";
// // 1d. The AppState to access Application state
// import { AppState } from "./../app.state";
// 1e. Actions
import * as PersonActions from './../actions/app.search.action';
import{SearchServiceService } from '../search-service.service';
@Component({
  selector: 'app-saved-images',
  templateUrl: './saved-images.component.html',
  styleUrls: ['./saved-images.component.css']
})
export class SavedImagesComponent implements OnInit {
  favImage: any;
  // persons: Observable<Search[]>;
  constructor( private service:SearchServiceService) {
    // this.persons = store.select('Search_Image');
    // console.log(this.persons)
   }

  ngOnInit(): void {
     this.favImage = this.service.receiveData()
     this.favImage = [...new Set(this.favImage)]
     
     
  }
  // downloadFav(i) {
  //   const imgUrl = i.links.download;
  //   var a = document.createElement("a"); //Create <a>
  //   a.href = "data:image/jpeg;base64," + imgUrl; //Image Base64 Goes here
  //   a.download = "data:image/jpeg;base64," + imgUrl;; //File name Here
  //   a.click(); 
  
  // }
  downloadFav(i){
    this.toDataURL(this.favImage[i].imageUrl, function (dataUrl) {
    console.log(dataUrl)
    var a = document.createElement("a"); //Create <a>
    a.href = dataUrl; //Image Base64 Goes here
    a.download = "Image.png"; //File name Here
    a.click();
  })
}
  toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}



}
