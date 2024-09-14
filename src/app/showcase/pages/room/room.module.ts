import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
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
import { RoomFormComponent } from './room-form/room-form.component';

@NgModule({
    imports: [CommonModule,
              RoomRoutingModule,
              HttpClientModule,
              ButtonModule,
              PanelModule,
              DialogModule,
              StepperModule,
              FloatLabelModule,
              CalendarModule,
              MultiSelectModule,
              InputTextModule,
              TagModule,
              InputNumberModule,TableModule],

    declarations: [RoomComponent, RoomFormComponent]
})
export class RoomModule {}
