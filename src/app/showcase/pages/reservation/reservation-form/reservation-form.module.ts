import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UIKitRoutingModule } from './reservation-form-routing.module';
import { ReservationFormComponent } from './reservation-form.component';
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
import { SplitButtonModule } from 'primeng/splitbutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
    imports: [CommonModule, 
              FormsModule,
              ReactiveFormsModule,
              UIKitRoutingModule, 
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
              CascadeSelectModule,
              SplitButtonModule,
              ConfirmDialogModule,
              TableModule],

    declarations: [ReservationFormComponent],
})
export class ReservationDetailModule {}
