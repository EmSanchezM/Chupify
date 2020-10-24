import { Component, OnInit } from '@angular/core';

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
