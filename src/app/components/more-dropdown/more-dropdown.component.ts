import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-more-dropdown',
  templateUrl: './more-dropdown.component.html',
  styleUrl: './more-dropdown.component.scss'
})
export class MoreDropdownComponent {
  @Output() minhaFuncaoEvento = new EventEmitter();

  deletebutton() {
    this.minhaFuncaoEvento.emit();
  }
}
