import { Component, OnInit } from '@angular/core';


/**
 * This is the main app component for an authenticated user.
 *
 * This component renders the outermost chrome
 * (application header and tabs, the compose  and logout button)
 * It has a `ui-view` viewport for nested states to fill in.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }

}
