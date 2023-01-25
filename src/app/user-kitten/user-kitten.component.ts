import {  Component } from '@angular/core';
import { Form } from '../model';


@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css'],
})
export class UserKittenComponent  {
  myListKitten: Form[] = [];
  // newDisplay! :boolean;

  implementMyListKitten(listKitten: Form[]): void {
    this.myListKitten = listKitten;
  }

  // onDisplayToMyList(display: boolean): void {
  //   this.newDisplay = !display;
  // }

  
}
