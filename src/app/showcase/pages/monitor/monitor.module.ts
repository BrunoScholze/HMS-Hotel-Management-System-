import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UIKitRoutingModule } from './monitor-routing.module';
import { MonitorComponent } from './monitor.component';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

@NgModule({
    imports: [CommonModule, UIKitRoutingModule, HttpClientModule,CardModule, ChartModule],
    declarations: [MonitorComponent]
})
export class MonitortModule {}
