import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OpcionModuleModule } from './opcion-module/opcion-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OpcionModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
