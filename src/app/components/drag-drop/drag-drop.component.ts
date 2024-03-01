import { Component } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.scss'
})
export class DragDropComponent {

  
  onUploadSuccess(event: any) {
    // Manipular os arquivos aqui
    // const files = event.addedFiles;
  }

  onUploadError(event: any){
    console.log(event);

  }

}
