/**
******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5900-A1B
* © Copyright IBM Corp. 2018
*
* The source code for this program is not published or otherwise divested
* of its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*****************************************************************************
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IbmcommonNgHeaderComponent } from './ibmcommon-ng-header.component';
import { HeaderProperties } from './header/definitions';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [IbmcommonNgHeaderComponent, HeaderComponent, SectionComponent],
  exports: [IbmcommonNgHeaderComponent, HeaderComponent, SectionComponent]
})
export class IbmcommonNgHeaderModule { }
