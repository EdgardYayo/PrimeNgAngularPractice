import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { ImagesService } from '../../../services/images.service';
import { ButtonModule } from 'primeng/button';
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterLink, GalleriaModule, ButtonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  providers:[ImagesService]
})
export class GalleryComponent implements OnInit {

  images: any[] | undefined;
  heartsArray: string[] = [];
  changeColor = false;

  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  constructor(
    private imgService: ImagesService,
    private renderer2: Renderer2,
    private elementRef: ElementRef
  ){}

  ngOnInit(): void {
      this.images = this.imgService.getImages();
      this.heartsArray = new Array(1215).fill('❤️');
  }

  makeRainConfetti() {
    let canvas = this.renderer2.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    this.renderer2.appendChild(document.body, canvas);
    const myConfetti = confetti.create(canvas, {
      resize: true
    })
    myConfetti({
      particleCount: 1000,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: 0.5,
        y: 0
      }
    })?.then(() => {
      this.renderer2.removeChild(document.body, canvas);
    });

  }

  changeHeartsColor() {
    let heartsElement = document.querySelectorAll('.hearts');
    heartsElement.forEach((heart) => {
      if(this.changeColor) {
        (heart as HTMLElement).style.color = 'tomato';
      } else  {
        (heart as HTMLElement).style.color = 'blueviolet';
      }
    });

    this.changeColor = !this.changeColor;
  }

}
