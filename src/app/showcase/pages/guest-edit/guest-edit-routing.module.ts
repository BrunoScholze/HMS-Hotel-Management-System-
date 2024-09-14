import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GuestEditComponent } from './guest-edit.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: GuestEditComponent }])],
    exports: [RouterModule]
})
export class UIKitRoutingModule {}
