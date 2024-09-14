import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationComponent } from './reservation.component';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { StepperModule } from 'primeng/stepper';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { ColorPickerModule } from 'primeng/colorpicker';

@NgModule({
    imports: [CommonModule,
              ReservationRoutingModule,
              HttpClientModule,
              ButtonModule,
              ToolbarModule ,
              PanelModule,
              DialogModule,
              StepperModule,
              FloatLabelModule,
              CalendarModule,
              MultiSelectModule,
              InputNumberModule,
              ColorPickerModule,
              InputTextModule,
              TableModule],

    declarations: [ReservationComponent]
})
export class ReservationModule {}
