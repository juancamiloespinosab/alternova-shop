import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  getRandomNumber(limit: number): number {
    return Math.floor(Math.random() * limit) + 1;
  }
}
