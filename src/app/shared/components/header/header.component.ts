import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  /*  templateUrl: './header.component.html',*/
  template: `
    <mat-toolbar color="primary">
      <span class="material-icons"> support_agent </span>
      <span> Centro de Servicio VANTYC</span>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
