import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hour-worked-box',
  templateUrl: './hour-worked-box.component.html',
  styleUrl: './hour-worked-box.component.scss'
})
export class HourWorkedBoxComponent {

  @Input() config!: hourWorked;

}

type hourWorked = {
  
    time: string,
    title: string,
    subtitle: string,
    icon: string,
    color: string,

}