import { Injectable } from '@angular/core';

@Injectable()
export class CurrentViewService {
  view = 'catalog';
  id: number;
  board = 'IT';
}
