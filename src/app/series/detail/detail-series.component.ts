import { Component } from '@angular/core';
import { SeriesService } from "../../services/series.service";
import { Serie } from "../../model/serie";

@Component({
  selector: '',
  templateUrl: "app/series/detail/detail-series.component.html",
  providers: [SeriesService]
})
export class DetailSeriesComponent {
  serie: Serie = new Serie();

  constructor(private seriesService: SeriesService) {
    this.detailsSerie();
  }

  detailsSerie(): void {
    let result: Serie = this.seriesService.getSerieById(this.serie.id);
    if (result) {
      this.serie = result;
    }
  }

  goBack(): void {

  }

  excludeSerie(): void {
    let result: boolean = this.seriesService.deleteSerie(this.serie);
    if (result) {
      this.serie = new Serie();
    }
  }
}