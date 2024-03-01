import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-text',
  templateUrl: './icon-text.component.html',
  styleUrls: ['./icon-text.component.scss'],
})
export class IconTextComponent  implements OnInit {
  @Input() iconText!: any;
  constructor() { }

  ngOnInit() {}

}
