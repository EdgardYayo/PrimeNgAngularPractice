import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { ImagesService } from '../../services/images.service';
import { ButtonModule } from 'primeng/button';

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

  constructor(private imgService: ImagesService){}

  ngOnInit(): void {
      this.images = this.imgService.getImages();
  }

}
