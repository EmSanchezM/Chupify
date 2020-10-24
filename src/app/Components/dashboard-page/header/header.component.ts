import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

declare function initialFunctions();

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderAdminComponent implements OnInit {
 
  constructor() { 
   
  }

  ngOnInit(): void {
    initialFunctions();
  }

 
}
