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
import { Component, Input, OnInit } from '@angular/core';
import { HeaderProperties } from './definitions';
@Component({
  selector: 'lib-ibmcommon-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() model: HeaderProperties;
  constructor() { }

  ngOnInit() {
  }
  getStyles() {
    const styles = {
      'background-color': this.model.backgroundColor,
      'height': this.model.height,
      'color': this.model.textColor
    };
    return styles;
  }
}
