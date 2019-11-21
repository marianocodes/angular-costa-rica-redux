import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { AppService } from '../../app.service';
import { GetList, GetListSuccess, GetListFail } from '../actions/cart.actions'

@Injectable()
export class ItemsEffects {

  public login$ = createEffect(() =>
      this.actions$.pipe(
        ofType(GetList),
        exhaustMap(() =>
          this.service.getItems().pipe(
            map(items => GetListSuccess(items)),
            catchError(error => of(GetListFail(error)))
          )
        )
      )
    );

  constructor(
    private actions$: Actions,
    private service: AppService
  ) {}
}
