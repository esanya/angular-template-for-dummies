import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DataCenterSceneComponent } from './datacenter-scene/data-center-scene.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      children: [
        { path: '', redirectTo: 'data-center-scene' },
        { path: 'data-center-scene', component: DataCenterSceneComponent }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class ThreeShowcaseRoutingModule { }


