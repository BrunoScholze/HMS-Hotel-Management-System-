import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DayUseFormComponent } from './day-use-form.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: DayUseFormComponent }])],
    exports: [RouterModule]
})
export class UIKitRoutingModule {}
