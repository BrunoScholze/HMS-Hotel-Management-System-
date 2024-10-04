import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoomFormComponent } from './room-form.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: RoomFormComponent }])],
    exports: [RouterModule]
})
export class RoomFormRoutingModule {}
