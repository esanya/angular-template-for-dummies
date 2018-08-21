import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { ThreeExamplesModule } from '../three-examples/three-examples.module';
import { DataCenterSceneComponent } from './datacenter-scene/data-center-scene.component';
import { ThreeShowcaseRoutingModule } from './three-showcase-routing.module';


@NgModule({
    imports: [
        CommonModule,
        MaterialDesignModule,
        ThreeExamplesModule,
        ThreeShowcaseRoutingModule
    ],
    declarations: [
        DataCenterSceneComponent
    ],
    exports: [
        DataCenterSceneComponent
    ]
})
export class ThreeShowcaseModule { 
    constructor() {
        console.debug(' - ThreeShowcaseModule');
    }
}
