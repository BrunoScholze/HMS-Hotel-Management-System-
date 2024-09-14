import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UIKitRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { ChipsModule } from 'primeng/chips';



@NgModule({
    imports: [CommonModule, 
              UIKitRoutingModule, 
              HttpClientModule , 
              ButtonModule, 
              InputGroupModule, 
              InputGroupAddonModule,
              TagModule,
              ToolbarModule,
              MultiSelectModule, 
              ChipsModule],
              
    declarations: [HomeComponent]
})
export class HomeModule {}
