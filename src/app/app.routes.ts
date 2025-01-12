import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'home',
  },
  {
    path: 'category',
    component: SingleCategoryComponent,
    title: '',
  },
  {
    path: 'post',
    component: SinglePostComponent,
    title: '',
  },

  // Add more routes here...
  {
    path: 'about',
    component: AboutUsComponent,
    title: '',
  },
  {
    path: 'term-conditions',
    component: TermsAndConditionComponent,
    title: '',
  },
  {
    path: 'contact',
    component: ContactUsComponent,
    title: '',
  },
];
