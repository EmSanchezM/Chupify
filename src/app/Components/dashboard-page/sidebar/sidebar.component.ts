import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarAdminComponent implements OnInit {

  @Input() isCollapse = false;
  @Input() routes: any; 

  constructor() { }

  ngOnInit(): void {
    
  }

 
}
