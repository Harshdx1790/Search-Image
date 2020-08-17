import { Component, OnInit, Inject} from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as SearchActions from './../actions/app.search.action';
import Search  from './../models/app.search.model';
import SearchState from '../state/app.search.state';


import { SearchServiceService } from '../search-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";



@Component({
  selector: 'app-add-favourite',
  templateUrl: './add-favourite.component.html',
  styleUrls: ['./add-favourite.component.css']
})
export class AddFavouriteComponent implements OnInit {
  listName : any = "";
  list:string = "";
  data:any;
  link:String;
  favImages : any;
  pageUrl: any;
  imageName = "";
  val1: any;
  display: boolean;
  list1: any;
  listValues: any = [];
  list2: any;
  lists = [];
  object: { name: any; imageUrl: any; };
  showInput: boolean;
  favList: boolean;
  favLists: any[];
  checkStatus : boolean = false
  Search_Image: Search;
  search_list: Observable<Search[]>;


  url = ""
  constructor(private store: Store<{Search:SearchState}>,private service :SearchServiceService,public snackBar: MatSnackBar,private dialogRef: MatDialogRef<AddFavouriteComponent>,@Inject(MAT_DIALOG_DATA) data) {
    this.search$= this.store.pipe(select('Search'));


    this.data = data;
    //this.link = data.pageURL
  this.pageUrl = data.user.name
  this.imageName = data.alt_description;


    console.log(data);
  }
 
  ngOnInit(): void {
  
    this.searchSubscription = this.store.pipe(select('Search'))
    .pipe(
      map(x => {
     
        this.searchList = x.Search;
        this.searchError = x.SearchError;
      })
    )
    .subscribe();

  this.store.dispatch(SearchActions.BeginGetSearchAction());
  
    this.checkStatus = true;

    console.log(this.search_list)
    this.lists = this.service.receiveData();
    if(this.lists && this.lists.length != 0){
    this.favList = true;
    this.favLists = [...new Set(this.lists.map(x=>x.name))]
    }
    console.log(this.lists);
  }

  search$: Observable<SearchState>;
  searchSubscription: Subscription;
  searchList: Search[] = [];
  searchError: Error = null;
  addSelected(){
    this.service.sendData(this.data)
    
  }
  
  onRadioBtnClick(list) {
    this.val1 = list;
  }
  addToFavourities(listName){
    // if(listName === undefined){
        // alert("Input field cannot be empty")
    // }else{
      // console.log(this.listName)
      const search: Search = { imageName: listName, url: this.data.urls.small,IsCompleted:true};
      console.log(search)
      this.store.dispatch(SearchActions.BeginCreateSearchAction({ payload: search }));
      this.imageName = "";
    this.url = "";
      this.object = {"name":this.listName,"imageUrl":this.data.urls.small}
      this.service.sendData(this.object);
    // }
  }
  addToExisting(listName){
    console.log(listName)
    this.object = {"name":listName,"imageUrl":this.data.urls.small}
    this.service.sendData(this.object);
  }
  addNewList(){
    this.showInput = true
  }  
 
}
