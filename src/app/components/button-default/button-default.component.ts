import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-default',
  templateUrl: './button-default.component.html',
  styleUrl: './button-default.component.scss'
})
export class ButtonDefaultComponent {
  @Input() config!: buttonDefalut;
}


type buttonDefalut = {
  color: 'success' | 'danger' | 'warning' | 'secondary' | 'info',
  text: string,
  type: string
}

