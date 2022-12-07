import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard, MsalRedirectComponent } from '@azure/msal-angular';
import { BrowserUtils } from '@azure/msal-browser';

import { HomeComponent } from './home/home.component';
import { GuardedComponent } from './guarded/guarded.component';

const routes: Routes = [
  {
    path: 'guarded',
    component: GuardedComponent,
    canActivate: [
        MsalGuard
    ]
  },
  {
      // Needed for handling redirect after login
      path: 'auth',
      component: MsalRedirectComponent
  },
  {
      path: '',
      component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Don't perform initial navigation in iframes or popups
    initialNavigation: !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup() ? 'enabledNonBlocking' : 'disabled' // Set to enabledBlocking to use Angular Universal
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
