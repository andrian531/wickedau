import { Component, OnInit } from '@angular/core';
import{ GlobalConstants } from '../common/global-constants';
import {  Title, Meta, MetaDefinition } from '@angular/platform-browser';


@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss'],
})
export class PagenotfoundComponent implements OnInit {
  footer = GlobalConstants.sitefooter;
  constructor(private titleService: Title, private meta: Meta, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Page Not Found - Wicked Campers Australia');
    
  }

}
