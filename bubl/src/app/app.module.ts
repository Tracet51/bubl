import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BublRowComponent } from './bubl-row/bubl-row.component';
import { BublFeedComponent } from './bubl-feed/bubl-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BublRowComponent,
    BublFeedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
