import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {map, pipe} from "rxjs";
import {AngularFireAuthGuard, emailVerified} from "@angular/fire/compat/auth-guard";

const redirectIfEmailNotValidated = () => pipe(emailVerified, map(emailVerified => {
  if (emailVerified){
    return true;
  }
  else{
    return ['profile'];
  }
}));

const routes: Routes = [
  {
    path: 'feed',
    loadChildren: () => import('./Pages/feed/feed.module').then(m => m.FeedModule),
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectIfEmailNotValidated}
  },
  {
    path: 'support',
    loadChildren: () => import('./Pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./Pages/post/post.module').then(m => m.PostModule),
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectIfEmailNotValidated}
  },
  {
    path: 'profile',
    loadChildren: () => import('./Pages/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'profileedit',
    loadChildren: () => import('./Pages/profileedit/profileedit.module').then(m => m.ProfileeditModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./Pages/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'passreset',
    loadChildren: () => import('./Pages/passreset/passreset.module').then(m => m.PassresetModule)
  },
  {
    path: 'login', loadChildren: () => import('./Pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'kovetok', loadChildren: () => import('./Pages/kovetok/kovetok.module').then(m => m.KovetokModule)
  },
  { path: 'advert', loadChildren: () => import('./Pages/advert/advert.module').then(m => m.AdvertModule) }, //kesobb torolni kell
  {
    path: '**',
    redirectTo: '/login'
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
