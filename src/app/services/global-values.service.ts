import {effect, Injectable, signal} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GlobalValuesService {
  public childName = signal('Child component');

  public setChildName() {
    this.childName.set('Child component after button click!')
  }
}
