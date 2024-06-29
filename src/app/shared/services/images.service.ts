export class ImagesService {
    images = [
        {
            itemImageSrc: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
            title: 'Chameleon'
        },
        {
            itemImageSrc: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg",
            title: 'Peacock feather'
        },
        {
            itemImageSrc: "https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-1907862843.jpg",
            title: 'Bear chiling'

        }
    ]


    getImages() {
        return this.images;
    }
}