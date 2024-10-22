import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UIKitRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';

@NgModule({
    imports: [CommonModule, UIKitRoutingModule, HttpClientModule, SchedulerModule],
    declarations: [MapComponent]
})
export class MaptModule {}
