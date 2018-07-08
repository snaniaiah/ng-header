import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IbmcommonNgHeaderModule } from 'ibmcommon-ng-header';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IbmcommonNgHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
