import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DayUseComponent } from './day-use.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: DayUseComponent }])],
    exports: [RouterModule]
})
export class UIKitRoutingModule {}
