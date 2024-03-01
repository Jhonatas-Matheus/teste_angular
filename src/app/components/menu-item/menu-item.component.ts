import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  @Input() menuItemData: any;
  public isRouter: boolean = false;
  
  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    
    if(this.location.path().includes(this.menuItemData.link)){
      this.isRouter = true;
    }
    this.router.events.subscribe((event) => {
      //   const url: string = this.router.url;
      //   const containsAll: boolean = this.containsAllInUrl(url, this.menuItemData.link);
      //   this.isRouter = containsAll
      // })
  })
}

 
}
