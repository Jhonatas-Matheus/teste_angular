import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriorityComponent } from '../priority/priority.component';
import { StatusComponent } from '../status/status.component';
import { IconTextComponent } from '../icon-text/icon-text.component';
import { PeopleComponent } from '../people/people.component';
import { ProgressComponent } from '../progress/progress.component';
import { StepComponent } from '../step/step.component';
import { TablesComponent } from '../tables/tables.component';
import { MoreDropdownComponent } from '../more-dropdown/more-dropdown.component';
import { CommentComponent } from '../comment/comment.component';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import { DayoffComponent } from '../dayoff/dayoff.component';
import { PostItComponent } from '../post-it/post-it.component';
import { ToDoComponent } from '../to-do/to-do.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HourWorkedBoxComponent } from '../hour-worked-box/hour-worked-box.component';
import { InputComponent } from '../input/input.component';
import { SpotBoxComponent } from '../spot-box/spot-box.component';
import { ButtonDefaultComponent } from '../button-default/button-default.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ModalComponent } from '../modal/modal.component';
import { ChartComponent } from '../chart/chart.component';
import { MatIconModule } from '@angular/material/icon';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { ResponsibleComponent } from '../responsible/responsible.component';
import { AttachmentComponent } from '../attachment/attachment.component';
import { ColorTextComponent } from '../color-text/color-text.component';

import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';


import { IConfig, NgxMaskDirective, provideEnvironmentNgxMask } from 'ngx-mask';
import { Select2Module } from 'ng-select2-component';
import { DragDropComponent } from '../drag-drop/drag-drop.component';
import { LoadingComponent } from '../loading/loading.component';

const maskConfig: Partial<IConfig> = {
  validation: true,
  keepCharacterPositions: true

};

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
  clickable: true,

   acceptedFiles: 'image/*'
 };
 

@NgModule({
  declarations: [
    PriorityComponent,
    StatusComponent,
    IconTextComponent,
    PeopleComponent,
    ProgressComponent,
    StepComponent,
    TablesComponent,
    MoreDropdownComponent,
    CommentComponent,
    DayoffComponent,
    PostItComponent,
    ToDoComponent,
    HourWorkedBoxComponent,
    InputComponent,
    SpotBoxComponent,
    ButtonDefaultComponent,
    SidebarComponent,
    ModalComponent,
    ChartComponent,
    BreadcrumbComponent,
    MenuItemComponent,
    ResponsibleComponent,
    AttachmentComponent,
    ColorTextComponent,
    DragDropComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PickerComponent,
    FormsModule,
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    NgxMaskDirective,
    Select2Module,
    DropzoneModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      
    })

  ],
  exports: [
    PriorityComponent,
    StatusComponent,
    IconTextComponent,
    PeopleComponent,
    ProgressComponent,
    StepComponent,
    TablesComponent,
    MoreDropdownComponent,
    CommentComponent,
    DayoffComponent,
    PostItComponent,
    ToDoComponent,
    HourWorkedBoxComponent,
    InputComponent,
    SpotBoxComponent,
    ButtonDefaultComponent,
    SidebarComponent,
    ModalComponent,
    ChartComponent,
    BreadcrumbComponent,
    MenuItemComponent,
    ResponsibleComponent,
    AttachmentComponent,
    ColorTextComponent,
    DragDropComponent,
    LoadingComponent
  ],
  providers: [    
    provideEnvironmentNgxMask(maskConfig),
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class SharedModule { }
