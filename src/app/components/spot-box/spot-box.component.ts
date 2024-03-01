import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spot-box',
  templateUrl: './spot-box.component.html',
  styleUrl: './spot-box.component.scss'
})
export class SpotBoxComponent {
  @Input() config!: spotBox;

}

type spotBox =  {
  time: string
  title: string
  icon: string
  color: string
  data: string
}