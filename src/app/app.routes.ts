import { Routes } from '@angular/router';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AllRequestsComponent } from './all-requests/all-requests.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'profile',
        component: ProfilepageComponent
    },
    {
        path: 'vacationRequests',
        component: AllRequestsComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
