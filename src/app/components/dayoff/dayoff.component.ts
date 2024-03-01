import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dayoff',
  templateUrl: './dayoff.component.html',
  styleUrl: './dayoff.component.scss'
})
export class DayoffComponent {
  @Input() config!: dayoff;
}

type dayoff = {
  user_name: string,
  user_img: string,
  office: string,
  days: number
}
