import { Location } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Select2Data } from 'ng-select2-component';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() config!: input;
  @Output() deliveryInputValue = new EventEmitter();
  public inputValue!: any
  @ViewChild('fileInput') fileInput!: ElementRef;


  public selectedComponents: any[] = [];


  public handleSelecteManyOptions(id: any){
    this.selectedComponents.push(id);
  }

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.inputValue = this.config.value
    console.log(this.config.value)
    this.location.onUrlChange((url)=>{
      this.inputValue = this.config.value
      // this.inputValue = '12312312312312'
      if (url.includes('edit')) {
        // this.config.readonly = false;
      }else if(url.includes('new')){
        // this.config.readonly = false;
      }
       else {
        // this.config.readonly = true;
      }
    })
    if(this.location.path().includes('new')){
      // this.inputValue = ''
    }

  }
  ngOnChanges(): void {
    // this.inputValue = this.config.value
  }

  openFilePicker() {
    this.fileInput.nativeElement.click();
  }

  public displayValue ($event?:any) {

    if(!$event){
      this.deliveryInputValue.emit(this.inputValue);
      console.log($event.target.value)
    }
    else if( $event === true || $event === false){
      this.deliveryInputValue.emit($event);
      console.log($event.target.value)
    }else if($event && (!$event.options || !$event.options[0])){
      this.deliveryInputValue.emit($event.target.value);
      console.log($event.target.value)
    }else {
      console.log($event.options[0].value)
      this.deliveryInputValue.emit($event.options[0].value)
    }
  }

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    // Aqui você pode fazer o que quiser com o arquivo selecionado
    console.log('Arquivo selecionado:', selectedFile);
  }


  public inputFocus!: boolean;
  public inputFocused!: String;

  public onInputFocus(index: string) {
    this.inputFocused = index;
    this.inputFocus = true;
  }

  public onInputBlur(){
    this.inputFocus = false;
  }

  

}

export type input = {
  formGroup?: FormGroup
  placeholder?: string,
  label?: string,
  labelPosition?: string,
  icon?: string,
  type?: string,
  readonly?: boolean,
  value?: string,
  required?: boolean,
  select?: boolean,
  selectOptions?: any[],
  formControlName?:any,
  textarea?: boolean,
  file?: boolean,
  col?: number,
  checkbox?: boolean,
  checkboxOptions?: any[],
  mask?: string,
  selectComponent?: string,
  selectComponentOptions?: any,
  manySelects?: string,
  manySelectOptions?: any
}
