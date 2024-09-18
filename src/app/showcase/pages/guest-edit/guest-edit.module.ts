import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UIKitRoutingModule } from './guest-edit-routing.module';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { StepperModule } from 'primeng/stepper';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { SplitButtonModule } from 'primeng/splitbutton';
import { GuestEditComponent } from './guest-edit.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, 
              FormsModule,
              ReactiveFormsModule,
              UIKitRoutingModule, 
              HttpClientModule, 
              ToolbarModule, 
              ButtonModule, 
              PanelModule, 
              DialogModule, 
              StepperModule, 
              FloatLabelModule, 
              CalendarModule, 
              TableModule,
              TagModule,
              SplitButtonModule,
              InputSwitchModule,
              TabViewModule,
              InputTextModule],

    declarations: [GuestEditComponent]
})
export class GuestEditModule {}
