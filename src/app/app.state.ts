import  Search  from './models/app.search.model';
 
// 1. this will define the app state
// export  interface AppState {
//   readonly Search_Image: Search[];
// }
 
export default class SearchState {
  Search: Array<Search>;
  SearchError: Error;
}

export const initializeState = (): SearchState => {
  return { Search: Array<Search>(), SearchError: null };
};