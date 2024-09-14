import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UIKitRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
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

@NgModule({
    imports: [CommonModule, 
              UIKitRoutingModule, 
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

    declarations: [CategoryComponent]
})
export class CategoryModule {}
