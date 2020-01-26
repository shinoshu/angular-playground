import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkComponent } from './work/work.component';
import { PixiComponent } from './pixi/pixi.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'work', component: WorkComponent },
  { path: 'pixi', component: PixiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
