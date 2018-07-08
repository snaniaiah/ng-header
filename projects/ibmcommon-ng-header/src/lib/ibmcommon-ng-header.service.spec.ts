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
import { TestBed, inject } from '@angular/core/testing';

import { IbmcommonNgHeaderService } from './ibmcommon-ng-header.service';

describe('IbmcommonNgHeaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IbmcommonNgHeaderService]
    });
  });

  it('should be created', inject([IbmcommonNgHeaderService], (service: IbmcommonNgHeaderService) => {
    expect(service).toBeTruthy();
  }));
});
