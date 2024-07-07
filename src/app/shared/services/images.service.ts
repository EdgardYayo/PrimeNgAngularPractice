export class ImagesService {
    images = [
        {
            itemImageSrc: "assets/img/COVID_SURREAL.webp",
            thumbnailImageSrc: "assets/img/COVID_SURREAL.webp",
            title: 'Chameleon',
            alt: 'Covid-19'
        },
        {
            itemImageSrc: "assets/img/COVID_testing.jpg",
            thumbnailImageSrc: "assets/img/COVID_testing.jpg",
            title: 'Peacock feather',
            alt: 'testing covid'
        },
        {
            itemImageSrc: "assets/img/COVID.png",
            thumbnailImageSrc: "assets/img/COVID.png",
            title: 'Bear chiling',
            alt: 'COVID'
        },
        {
            itemImageSrc: "assets/img/HELPING.jpg",
            thumbnailImageSrc: "assets/img/HELPING.jpg",
            title: 'Bear chiling',
            alt: 'Helping people with covid'
        },
        {
            itemImageSrc: "assets/img/UNICEF.webp",
            thumbnailImageSrc: "assets/img/UNICEF.webp",
            title: 'Bear chiling',
            alt: 'UNICEF helping people'
        }
    ]


    getImages() {
        return this.images;
    }
}