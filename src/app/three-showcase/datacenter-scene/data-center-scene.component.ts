import { Component, OnInit, ContentChildren, QueryList, AfterViewInit } from '@angular/core';
import { WebGLRendererComponent } from '../../three-examples/renderer/webgl-renderer.component';

@Component({
  selector: 'app-data-center-scene',
  templateUrl: './data-center-scene.component.html',
  styleUrls: ['./data-center-scene.component.scss']
})
export class DataCenterSceneComponent implements OnInit, AfterViewInit {

  
  constructor() { 
    console.debug('  + DataCenterSceneComponent');
  }

  ngOnInit() {
   
  }

  ngAfterViewInit(): void {
   
  }


}
