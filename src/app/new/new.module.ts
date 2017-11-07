import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab1Component} from '../components/tab-1/tab-1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Tab1Component
  ],
  exports: [Tab1Component]
})
export class NewModule { }
