import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'feed',
    loadChildren: () => import('./Pages/feed/feed.module').then(m => m.FeedModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./Pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./Pages/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./Pages/post/post.module').then(m => m.PostModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./Pages/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./Pages/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'login', loadChildren: () => import('./Pages/login/login.module').then(m => m.LoginModule)
  },
  { path: 'advert', loadChildren: () => import('./Pages/advert/advert.module').then(m => m.AdvertModule) },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
