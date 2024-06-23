import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';


@Component({
  selector: 'app-second',
  standalone: true,
  imports: [
    CardModule, 
    ButtonModule, 
    SidebarModule, 
    RouterLink, 
  ],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  sidebarVisible1 : boolean = false;

}
