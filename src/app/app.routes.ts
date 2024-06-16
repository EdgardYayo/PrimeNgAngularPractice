import { Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    { path: '', component: GalleryComponent },
    { path: 'second', component: SecondComponent }
];
