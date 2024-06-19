import { Component } from '@angular/core';
import {GlobalValuesService} from "../../services/global-values.service";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  constructor(public globalValues: GlobalValuesService) {
  }
}
