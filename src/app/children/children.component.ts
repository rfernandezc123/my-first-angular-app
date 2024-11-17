import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent {
  @Input() title?: string ;

  @Output() titleChange = new EventEmitter<string>();

  emitTitleChange() {
    this.titleChange.emit(this.title);
  }
}