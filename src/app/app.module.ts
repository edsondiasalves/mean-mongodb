import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SeriesComponent } from "./series/series.component";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: 'series', component: SeriesComponent }])
  ],
  declarations: [AppComponent, SeriesComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
