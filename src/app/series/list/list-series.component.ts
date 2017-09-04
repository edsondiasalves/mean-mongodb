import { Component } from '@angular/core';
import { SeriesService } from "../../services/series.service";
import { Serie } from "../../model/serie";

@Component({
  selector: 'series-list',
  templateUrl: "app/series/list/list-series.component.html",
  providers: [SeriesService]
})
export class ListSeriesComponent {
  series: Serie[] = [];
  
  constructor(private seriesService: SeriesService) {
    this.series = this.seriesService.getAllSeries();
    console.log(this.series);
  }
}