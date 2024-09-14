import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReservationDetailComponent } from './reservation-detail.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: ReservationDetailComponent }])],
    exports: [RouterModule]
})
export class UIKitRoutingModule {}
