import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Tab1Component} from './components/tab-1/tab-1.component';
import {Tab2Component} from './components/tab-2/tab-2.component';
import {Tab3Component} from './components/tab-3/tab-3.component';
import {Tab4Component} from './components/tab-4/tab-4.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/new', pathMatch: 'full'
  },
  {
    path: 'new',
    component: Tab1Component
  },
  {
    path: 'progress',
    component: Tab2Component
  },
  {
    path: 'completed',
    component: Tab3Component
  },
  {
    path: 'defeated',
    component: Tab4Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
