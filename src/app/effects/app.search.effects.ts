import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as SearchActions from '../actions/app.search.action';
import { SearchHttpService } from '../app.search.httpservice';
import Search from '../models/app.search.model';


@Injectable()
export class SearchEffects {
  constructor(private todoService: SearchHttpService, private action$: Actions) {}

  GetSearch$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(SearchActions.BeginGetSearchAction),
      mergeMap(action =>
        
        this.todoService.getToDos().pipe(
          map((data: Search[]) => {
            return SearchActions.SuccessGetSearchAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(SearchActions.ErrorSearchAction(error));
          })
        )
      )
    )
  );

  CreateToDos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(SearchActions.BeginCreateSearchAction),
      mergeMap(action =>
        this.todoService.createToDos(action.payload).pipe(
          map((data: Search) => {
            return SearchActions.SuccessCreateSearchAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(SearchActions.ErrorSearchAction(error));
          })
        )
      )
    )
  );
}