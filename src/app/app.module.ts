import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material/material.module';
import {NewModule} from './new/new.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { Tab1Component } from './components/tab-1/tab-1.component';
import { Tab2Component } from './components/tab-2/tab-2.component';
import { Tab3Component } from './components/tab-3/tab-3.component';
import { Tab4Component } from './components/tab-4/tab-4.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';

@NgModule({
  declarations: [
    AppComponent,
    // Tab1Component,
    Tab2Component,
    Tab3Component,
    Tab4Component,
    MenuListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
