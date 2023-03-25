import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './modules/detail/detail.component';

const routes: Routes = [
  {

    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)

  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./modules/detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
