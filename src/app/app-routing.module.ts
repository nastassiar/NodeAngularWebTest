import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/blank', pathMatch: 'full' },
  {
    path: 'blank',
    loadChildren: () => import('./app-shell/blank/blank.module').then(mod => mod.BlankModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./app-shell/list/list.module').then(mod => mod.ListModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

