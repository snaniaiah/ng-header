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
import { SectionProperties } from './definitions';
import { SectionComponent } from './section.component';

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    component.model = new SectionProperties('200px', '#1b2733', '#FFFFFF', '#1b2733', '', '1px', '1px');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
