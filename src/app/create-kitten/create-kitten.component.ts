import { Component, EventEmitter, Output } from '@angular/core';
import { Form } from '../model';
@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css'],
})
export class CreateKittenComponent {
  @Output()
  sendCatToCatList: EventEmitter<Form> = new EventEmitter<Form>();
  cat: Form = new Form('', '', '', '', true);

  createKitten(): void {
    this.sendCatToCatList.emit(this.cat);
    this.cat = new Form('', '', '', '', true);
    // console.log(this.cat);
  }
}
