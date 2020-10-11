import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './common/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./common/common.module').then(m => m.AppCommonModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'hive',
        loadChildren: () => import('./pages/page.module').then(m => m.PageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
