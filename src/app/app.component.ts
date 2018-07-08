import { Component, OnInit } from '@angular/core';
import { HeaderProperties } from 'ibmcommon-ng-header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'IBM Common Angular Header';
  headerProperties: HeaderProperties;

  ngOnInit() {
    this.headerProperties = new HeaderProperties('200px', '#1b2733', '#FFFFFF', '', 'Sample Title');
  }
}
