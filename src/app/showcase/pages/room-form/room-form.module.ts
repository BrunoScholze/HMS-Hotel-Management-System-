import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { StepperModule } from 'primeng/stepper';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { RoomFormRoutingModule } from './room-form.routing.module';
import { RoomFormComponent } from './room-form.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,
              RoomFormRoutingModule,
              HttpClientModule,
              ButtonModule,
              PanelModule,
              FormsModule,
              DialogModule,
              ChipsModule,
              StepperModule,
              FloatLabelModule,
              CalendarModule,
              MultiSelectModule,
              InputTextModule,
              InputSwitchModule,
              TagModule,
              InputNumberModule,TableModule],

    declarations: [RoomFormComponent]
})
export class RoomFormModule {}
