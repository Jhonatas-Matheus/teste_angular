import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() sidebarOptions!: any;
  parametroNaURL!: string;
  public isRouter!: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private storageService: StorageService) {}
  
  handleActiveRouter(paramas: string){
    if(this.location.path().includes(paramas)){
      return true;
    }else {
      return false
    }
  }

  public handleLogout() {
    this.storageService.setItemOnStorage('token:waws', '')
    this.storageService.setItemOnStorage('user:waws', '')

    this.router.navigate(['login'])
  }

  
  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const url = window.location.href;
      const partesDaURL = url.split('/');
    // O parâmetro estará na segunda posição após "localhost"
    this.parametroNaURL = partesDaURL[3];

    });
  }

}
