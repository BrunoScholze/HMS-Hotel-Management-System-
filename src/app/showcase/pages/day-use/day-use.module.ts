import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UIKitRoutingModule } from './day-use-routing.module';
import { DayUseComponent } from './day-use.component';

@NgModule({
    imports: [CommonModule, UIKitRoutingModule, HttpClientModule],
    declarations: [DayUseComponent]
})
export class DayUseModule {}
