import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

const data = [
  '🍎',
  '🍐',
  '🧀',
  '🍕',
  '🍬',
  '🥜',
];

@Injectable()
export class AppService {

  constructor() { }

  public getItems() {
    return of(data).pipe(
      delay(400)
    );
  }

}