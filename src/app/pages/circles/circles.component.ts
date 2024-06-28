import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-circles',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './circles.component.html',
  styleUrl: './circles.component.css',
})
export class CirclesComponent {
  rainbowColorArray: string[] = [
    '#FF0000', /* Red */
    '#FF7F00', /* Orange */
    '#FFFF00', /* Yellow */
    '#00FF00', /* Green */
    '#0000FF', /* Blue */
    '#4B0082', /* Indigo */
    '#8B00FF'  /* Violet */
  ]
}
