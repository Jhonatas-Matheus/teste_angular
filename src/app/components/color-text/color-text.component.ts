import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-text',
  templateUrl: './color-text.component.html',
  styleUrl: './color-text.component.scss'
})
export class ColorTextComponent {
  @Input() color!: any;

}
