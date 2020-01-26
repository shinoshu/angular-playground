import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as PIXI from 'pixi.js';

@Component({
  selector: 'app-pixi',
  templateUrl: './pixi.component.html',
  styleUrls: ['./pixi.component.css']
})
export class PixiComponent implements OnInit {
  @ViewChild('pixi', { static: true }) pixi: ElementRef;

  app: PIXI.Application;

  constructor() { }

  ngOnInit() {
    this.app = new PIXI.Application({ width: 256, height: 256 });
    this.pixi.nativeElement.appendChild(this.app.view);
  }
}
