import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrl: './attachment.component.scss'
})
export class AttachmentComponent {
  @Input() config!: attachment;
}

type attachment = {
  link: string,
  text: string,
  color?: string
}
