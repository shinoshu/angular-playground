import { Component, OnInit } from '@angular/core';

import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-playground';

  constructor(
    private webSocketService: WebsocketService
  ) { }

  ngOnInit() {
    const VConsole = require('vconsole');
    const vconsole = new VConsole();
  }
}
