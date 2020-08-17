
import { createAction, props } from '@ngrx/store';
import Search from "../models/app.search.model"


export const GetSearchAction = createAction('[Search] - Get Search');

export const CreateSearchAction = createAction(
  '[Search] - Create Search',
  props<Search>()
);


export const BeginGetSearchAction = createAction('[Search] - Begin Get Search');


export const SuccessGetSearchAction = createAction(
  '[Search] - Success Get Search',
  props<{ payload: Search[] }>()
);

export const BeginCreateSearchAction = createAction(
  '[Search] - Begin Create Search',
 
  props<{ payload: Search }>()
);

export const SuccessCreateSearchAction = createAction(
  '[Search] - Success Create Search',
  props<{ payload: Search }>()
);

export const ErrorSearchAction = createAction('[Search] - Error', props<Error>());



// export const Search_Image  = '[Search] Search_Image';

// export class SearchImage implements Action {
//     readonly type = Search_Image;
//     constructor(
//       public payload: Search
//     ) {}
//   }

//   export type Actions = SearchImage;