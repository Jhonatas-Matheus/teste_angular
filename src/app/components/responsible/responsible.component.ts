import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-responsible',
  templateUrl: './responsible.component.html',
  styleUrl: './responsible.component.scss'
})
export class ResponsibleComponent {
  @Input() responsibleData: any;
  public showResponsible: boolean = false;
  public responsibleSelected!: number; 

  public handleShowResponsible(index: number){
    this.responsibleSelected = index
    this.showResponsible = true;
  }
  public setResponsible(){
    this.showResponsible = !this.showResponsible
  }

}
