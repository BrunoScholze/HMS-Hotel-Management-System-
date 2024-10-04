import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReservationFormComponent } from './reservation-form.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: ReservationFormComponent }])],
    exports: [RouterModule]
})
export class UIKitRoutingModule {}
