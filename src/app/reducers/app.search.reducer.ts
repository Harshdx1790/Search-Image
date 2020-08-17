// import {Search} from '../models/app.search.model';
// import * as SearchActions from '../actions/app.search.action';


import { Action, createReducer, on } from '@ngrx/store';
import * as SearchActions from '../actions/app.search.action';
import Search from '../models/app.search.model';
import SearchState, { initializeState } from '../state/app.search.state';

export const intialState = initializeState();

const reducer = createReducer(
    intialState,
    on(SearchActions.GetSearchAction, state => state),
    on(SearchActions.CreateSearchAction, (state: SearchState, Search: Search) => {
      return { ...state, Searchs: [...state.Search, Search], SearchError: null };
    }),
    on(SearchActions.SuccessGetSearchAction, (state: SearchState, { payload }) => {
      return { ...state, Searchs: payload };
    }),
    on(SearchActions.SuccessCreateSearchAction, (state: SearchState, { payload }) => {
      return { ...state, Searchs: [...state.Search, payload], SearchError: null };
    }),
    on(SearchActions.ErrorSearchAction, (state: SearchState, error: Error) => {
      console.log(error);
      return { ...state, SearchError: error };
    })
  );
  
  export function SearchReducer(state: SearchState | undefined , action: Action) {
    return reducer(state, action);
  }

// export function reducer(state: Search[] = [], action: SearchActions.Actions) {
//     switch (action.type) {
//         case SearchActions.Search_Image:
//             return [...state,action.payload];
//         default:
//             return state

// }
// }