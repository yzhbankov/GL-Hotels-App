import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import * as RouterActions from '../store/actions/router.actions';

@Injectable()
export class RouterEffects {
  @Effect({ dispatch: false })
  public navigate$ = this.actions$.pipe(
    ofType(RouterActions.GO),
    map((action: RouterActions.Go) => action.payload),
    tap(({ path, query: queryParams, extras }) =>
      this.router.navigate(path, { queryParams, ...extras })
    )
  );

  @Effect({ dispatch: false })
  public navigateBack$ = this.actions$
    .pipe(
      ofType(RouterActions.BACK),
      tap(() => this.location.back())
    );

  @Effect({ dispatch: false })
  public navigateForward$ = this.actions$
    .pipe(
      ofType(RouterActions.FORWARD),
      tap(() => this.location.forward())
    );

  public constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}
}
