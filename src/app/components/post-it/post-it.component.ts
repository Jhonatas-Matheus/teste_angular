import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-it',
  templateUrl: './post-it.component.html',
  styleUrl: './post-it.component.scss'
})
export class PostItComponent {
  @Input() config!: postit;
}

type postit = {
  color: string,
  title: string,
  body: string
  user_name: string
}