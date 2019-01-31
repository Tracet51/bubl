import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BublRowComponent } from './bubl-row/bubl-row.component';
import { BublFeedComponent } from './bubl-feed/bubl-feed.component';
import { BublDetailComponent } from './bubl-detail/bubl-detail.component';

const appRoutes: Routes = [
   {
    path: 'feed',
    component: BublFeedComponent,
    data: { title: 'Bubl Feed' }
  },
  { path: 'bubl-detail',
    component: BublDetailComponent,
    data: { title: 'Bubl Detail' }
  },
  { path: '',
    redirectTo: '/feed',
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
    BublDetailComponent
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
