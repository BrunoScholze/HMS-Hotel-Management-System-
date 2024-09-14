import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UIKitRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';

@NgModule({
    imports: [CommonModule, UIKitRoutingModule, HttpClientModule],
    declarations: [MapComponent]
})
export class MaptModule {}
