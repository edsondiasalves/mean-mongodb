import { Component } from '@angular/core';
import { SeriesService } from "../../services/series.service";
import { Serie } from "../../model/serie";
import { Router } from "@angular/router";

@Component({
  selector: '',
  templateUrl: "app/series/update/update-series.component.html",
  providers: [SeriesService]
})
export class UpdateSeriesComponent {
  serie: Serie = new Serie();

  constructor(private seriesService: SeriesService,
    private router: Router) {
    this.getSerie();
  }

  getSerie(): void {
    let result: Serie = this.seriesService.getSerieById(this.serie.id);
    if (result) {
      this.serie = result;
    }
  }

  goBack(): void {
    this.router.navigate(["list"]);
  }

  updateSerie(): void {
    let result: boolean = this.seriesService.updateSerie(this.serie);
    if (result) {
      this.serie = new Serie();
    }
  }
}