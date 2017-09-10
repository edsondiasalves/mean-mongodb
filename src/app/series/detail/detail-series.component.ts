import { Component } from '@angular/core';
import { SeriesService } from "../../services/series.service";
import { Serie } from "../../model/serie";
import { Router } from "@angular/router";

@Component({
  selector: '',
  templateUrl: "app/series/detail/detail-series.component.html",
  providers: [SeriesService]
})
export class DetailSeriesComponent {
  serie: Serie = new Serie();

  constructor(
    private seriesService: SeriesService,
    private router: Router
  ) {
    this.detailsSerie();
  }

  detailsSerie(): void {
    let result: Serie = this.seriesService.getSerieById(this.serie.id);
    if (result) {
      this.serie = result;
    }
  }

  goBack(): void {
    this.router.navigate(["list"])
  }

  excludeSerie(): void {
    let result: boolean = this.seriesService.deleteSerie(this.serie.id);
    if (result) {
      this.goBack();
    }
  }
}