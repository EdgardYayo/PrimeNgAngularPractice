import { Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { SecondComponent } from './pages/second/second.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CirclesComponent } from './pages/circles/circles.component';

export const routes: Routes = [
    { path: '', component: GalleryComponent },
    { path: 'second', component: SecondComponent },
    { path: 'circles', component: CirclesComponent }
];
