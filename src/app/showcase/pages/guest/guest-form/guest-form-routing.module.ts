import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GuestFormComponent } from './guest-form.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: GuestFormComponent }])],
    exports: [RouterModule]
})
export class UIKitRoutingModule {}
