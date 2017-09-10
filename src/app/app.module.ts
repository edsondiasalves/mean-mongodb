import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { ListSeriesComponent } from "./series/list/list-series.component";
import { IncludeSeriesComponent } from "./series/include/include-series.component";
import { DetailSeriesComponent } from "./series/detail/detail-series.component";
import { UpdateSeriesComponent } from "./series/update/update-series.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        { path: 'list', component: ListSeriesComponent },
        { path: 'include', component: IncludeSeriesComponent },
        { path: 'detail/:id', component: DetailSeriesComponent },
        { path: 'update/:id', component: UpdateSeriesComponent }
    ])
  ],
  declarations: [AppComponent, ListSeriesComponent, IncludeSeriesComponent, DetailSeriesComponent, UpdateSeriesComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
