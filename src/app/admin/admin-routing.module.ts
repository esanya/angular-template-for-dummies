import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: AdminComponent,
      children: [
        { path: '', redirectTo: 'three-showcase/data-center-scene', pathMatch: 'full'},
        { path: 'under-construction', component: UnderConstructionComponent },
        { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
        { path: 'three-showcase', loadChildren: '../three-showcase/three-showcase.module#ThreeShowcaseModule' }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


