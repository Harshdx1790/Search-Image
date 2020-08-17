import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http'

import { SearchReducer } from './reducers/app.search.reducer';
import {SearchEffects} from './effects/app.search.effects'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchImageComponent } from './search-image/search-image.component';
import { AddFavouriteComponent } from './add-favourite/add-favourite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { SavedImagesComponent } from './saved-images/saved-images.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SearchImageComponent,
    AddFavouriteComponent,
    SavedImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    StoreModule.forRoot({
      Search : SearchReducer
  }),
  EffectsModule.forRoot([SearchEffects])
    
  ],
  providers: [],
  entryComponents:[AddFavouriteComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
