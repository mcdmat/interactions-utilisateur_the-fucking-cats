import { Component, EventEmitter, Output } from '@angular/core';
import { Form } from '../model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css'],
})
export class ListKittenComponent {
 

  @Output()
  sendCatToMyList: EventEmitter<Form[]> = new EventEmitter<any>();
  listKitten: Form[] = [];
  
 
  implementListKitten(cat: Form): void {
    
    this.sendCatToMyList.emit(this.listKitten);
    this.listKitten.push(cat);
    
  }
// @Output()
//   sendDisplayToMyList: EventEmitter<boolean> = new EventEmitter<boolean>();
//   display: boolean = true;
//   // ngAfterViewCheked() {}
//   adoptKitten(): void {
//     this.display = !this.display;
//     this.sendDisplayToMyList.emit(this.display);
//   }
}
