import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  textData = 'This is a test!'
  constructor() { }

  /**
   * funcion para obtener textData
  */
  getData(): string {
    return this.textData;
  }
}
