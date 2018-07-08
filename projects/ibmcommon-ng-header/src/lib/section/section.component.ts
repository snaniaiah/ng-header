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
import { SectionProperties} from './definitions';

@Component({
  selector: 'lib-ibmcommon-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  @Input() model: SectionProperties;
  constructor() { }

  ngOnInit() {
  }

  getStyles() {
    if (!this.model) {
      return;
    }
    const styles = {
      'background-color': this.model.backgroundColor || '',
      'height': this.model.height || '',
      'color': this.model.textColor || '',
      'border-style': this.model.borderStyle || '',
      'border-color': this.model.borderColor || '',
      'border-top-width': this.model.borderTopWidth || '',
      'border-bottom-width': this.model.borderBottomWidth || '',
      'border-right': 'none',
      'border-left': 'none'
    };

    if (!this.model.borderBottomWidth) {
        styles['border-bottom'] = 'none';
    }

    if (!this.model.borderTopWidth) {
        styles['border-top'] = 'none';
    }

    return styles;
  }
}
