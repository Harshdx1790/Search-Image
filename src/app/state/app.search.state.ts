import Search from '../models/app.search.model';

export default class SearchState {
    Search: Array<Search>;
    SearchError: Error;
  }
  
  export const initializeState = (): SearchState => {
    return { Search: Array<Search>(), SearchError: null };
  };