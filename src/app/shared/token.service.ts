import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
  auth: boolean;
  token: string;
  id: number;
}
