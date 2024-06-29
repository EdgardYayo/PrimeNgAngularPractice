import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { EventItem } from '../../shared/interfaces/event-item';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [TimelineModule, CardModule, ButtonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  events: EventItem[];

  constructor() {
    this.events = [
        { status: 'Created', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Developed', date: '20/01/2021 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Deployed', date: '17/09/2022 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Produced', date: '03/04/2024 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
}


}
