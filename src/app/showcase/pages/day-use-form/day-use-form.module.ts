import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { UIKitRoutingModule } from "./day-use-form-routing.module";
import { DayUseFormComponent } from "./day-use-form.component";
import { InputTextModule } from "primeng/inputtext";
import { SplitButtonModule } from "primeng/splitbutton";
import { TagModule } from "primeng/tag";
import { TableModule } from "primeng/table";
import { CalendarModule } from "primeng/calendar";
import { FloatLabelModule } from "primeng/floatlabel";
import { StepperModule } from "primeng/stepper";
import { DialogModule } from "primeng/dialog";
import { PanelModule } from "primeng/panel";
import { ButtonModule } from "primeng/button";
import { ToolbarModule } from "primeng/toolbar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputNumberModule } from "primeng/inputnumber";

@NgModule({
  imports: [
    CommonModule,
    UIKitRoutingModule,
    HttpClientModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    StepperModule,
    FloatLabelModule,
    CalendarModule,
    TableModule,
    TagModule,
    PanelModule,
    SplitButtonModule,
    ToolbarModule,
    ButtonModule,
    InputNumberModule,
    InputTextModule,
  ],

  declarations: [DayUseFormComponent],
})
export class DayUseFormModule {}
