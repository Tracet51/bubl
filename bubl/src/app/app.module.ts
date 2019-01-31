import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BublRowComponent } from './bubl-row/bubl-row.component';
import { BublFeedComponent } from './bubl-feed/bubl-feed.component';
import { BublDetailComponent } from './bubl-detail/bubl-detail.component';
import { BublFeedPageComponent } from './bubl-feed-page/bubl-feed-page.component';
import { BublDetailPageComponent } from './bubl-detail-page/bubl-detail-page.component';
import { BackBarComponent } from './back-bar/back-bar.component';

const appRoutes: Routes = [
   {
    path: 'bubl-feed-page',
    component: BublFeedPageComponent,
    data: { title: 'Bubl Feed' }
  },
  { path: 'bubl-detail-page',
    component: BublDetailPageComponent,
    data: { title: 'Bubl Detail' }
  },
  { path: '',
    redirectTo: '/bubl-feed-page',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BublRowComponent,
    BublFeedComponent,
    BublDetailComponent,
    BublFeedPageComponent,
    BublDetailPageComponent,
    BackBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
