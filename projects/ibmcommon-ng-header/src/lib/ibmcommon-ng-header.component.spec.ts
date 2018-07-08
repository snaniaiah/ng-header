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
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbmcommonNgHeaderComponent } from './ibmcommon-ng-header.component';

describe('IbmcommonNgHeaderComponent', () => {
  let component: IbmcommonNgHeaderComponent;
  let fixture: ComponentFixture<IbmcommonNgHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbmcommonNgHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbmcommonNgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
