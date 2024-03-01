import { Location } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements AfterViewInit {
  @Input() id: any;
  @Input() activeIf: any;
  @Input() size!: string;

 

  constructor(private router: Router, private location: Location) { }

  ngAfterViewInit(): void {
    const activeModal = document.getElementById('button'+this.id);
        if (activeModal) {
          activeModal.click();
        }
  }

  public handleRemoveNewFromUrl () {
    const currentPath = this.location.path()
    if(currentPath.includes('6')){ 
      const indexOfId = currentPath.indexOf('6') // Essa logica precisa ser alterada posteriormente
      const updateUrlTo = currentPath.substring(0, (indexOfId-1))
      this.location.replaceState(updateUrlTo)    
    }
    if(currentPath.includes('new')){
      const indefOfNew = currentPath.indexOf('new')
      if(indefOfNew !== -1){
        const updateUrlTo = currentPath.substring(0, (indefOfNew-1))
        this.location.replaceState(updateUrlTo)    
      }
    }
    
  }

  public toRouter(): void {
    const currentPath = this.location.path()
    if (currentPath.includes(this.activeIf)){
      const activeModal = document.getElementById('button'+this.id);
        if (activeModal) {
          activeModal.click();
        }
    }
  }
}


