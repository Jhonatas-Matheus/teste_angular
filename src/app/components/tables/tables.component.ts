import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent  implements OnInit {

  @Input() data!: any;
  @Input() headers!: any;
  @Input() type!: any;
  @Input() basePath!: any;
  @Input() dropdown: boolean = false
  public currenttd!: number;
  public toogletr: boolean = false;
  public namespace: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {}

  public toRouter(data: any): void {
    const currentPath = this.location.path();
    // if(!this.location.path().includes(data[0])){
    //   console.log(currentPath)
    //   this.location.replaceState(`${currentPath}/${data[0]}`)
    // }
    this.location.replaceState(`${currentPath}/${data[0]}`)

    // this.router.navigate([this.basePath, data[0]]);
  }

  public handleCheckboxClick(event: MouseEvent) {
    event.stopPropagation();
  }


  ngOnInit() {
    // const [id, ...rest] = this.data
    // this.data = rest
  }
  
  showDetails(index: number) {
    this.currenttd = index;
    this.toogletr = !this.toogletr;
  }

   isArrayOrObject(data: any) {
    if (Array.isArray(data)) {
      return true;
    } else {
      return false;
    }
  }
}