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
    this.getAllSeries();
  }

  getAllSeries(): void {
    this.seriesService
      .getAllSeries()
      .subscribe(series_ => {
        this.series = series_;
      });
  }

  deleteSerie(id: number): void {
    this.seriesService
      .deleteSerie(id)
      .subscribe(result_ => {
        if (result_) {
          this.getAllSeries();
        }
      });
  }
}