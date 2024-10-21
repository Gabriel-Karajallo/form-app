import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';


import { BasicPageComponent } from './reacive/pages/basic-page/basic-page.component';
import { DynamicPageComponent } from './reacive/pages/dynamic-page/dynamic-page.component';
import { SwitchesPageComponent } from './reacive/pages/switches-page/switches-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicPageComponent,
    DynamicPageComponent,
    SwitchesPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
