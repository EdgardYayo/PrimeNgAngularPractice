import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ImagesService } from '../../shared/services/images.service';


@Component({
  selector: 'app-second',
  standalone: true,
  imports: [GalleriaModule, CommonModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
  providers: [ImagesService]
})
export class SecondComponent {
    displayCustom: boolean = false;

    activeIndex: number = 0;

    images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private imgService: ImagesService) {}

    ngOnInit() {
        this.images = this.imgService.getImages()
    }

    imageClick(index: number) {
        console.log(index, this.images![index]);
        this.activeIndex = index;
        this.displayCustom = true;
    }
}
