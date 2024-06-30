import { Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { SecondComponent } from './pages/second/second.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CirclesComponent } from './pages/circles/circles.component';
import { FormComponent } from './pages/form/form.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { StatsByCountryComponent } from './components/stats-by-country/stats-by-country.component';

export const routes: Routes = [
    { path: '', component: GalleryComponent },
    { path: 'second', component: SecondComponent },
    { path: 'circles', component: CirclesComponent },
    { path: 'form', component: FormComponent },
    { path: 'timeline', component: TimelineComponent },
    { path: 'stats/:country', component: StatsByCountryComponent }
];
