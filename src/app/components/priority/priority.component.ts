import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss'],
})
export class PriorityComponent  implements OnInit {

  @Input() priority!: any;
  constructor() { }
  public color: any = '#fff'
  ngOnInit() {
    this.handleColor()
  }
  public handleColor() {
    if(this.priority === 'Urgente'){
      this.color = '#DC3545';
    }
    else if(this.priority === 'Alta'){
      this.color = '#ffcc00';
    }
    else if(this.priority === 'Normal'){
      this.color = '#3976df';
    }
    else if(this.priority === 'Baixa'){
      this.color = '#6c757d';
    }
  }
}
