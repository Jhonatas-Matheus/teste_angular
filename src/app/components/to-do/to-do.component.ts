import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss'
})
export class ToDoComponent {
  @Input() config!: todo;
}

type todo = {
  done: boolean,
  text: string,
  date: string
}
