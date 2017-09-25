import { Component } from '@angular/core';
import { SeriesService } from "../../services/series.service";
import { Serie } from "../../model/serie";
import { Router } from "@angular/router";

@Component({
  selector: '',
  templateUrl: "app/series/include/include-series.component.html",
  providers: [SeriesService]
})
export class IncludeSeriesComponent {
  serie: Serie = new Serie();

  constructor(
    private seriesService: SeriesService,
    private router: Router
  ) { }

  includeSerie(): void {
    this.seriesService.includeSerie(this.serie)
      .subscribe(result => {
        if (result) {
          this.goBack();
        }
      });
  }

  goBack(): void {
    this.router.navigate(["list"])
  }
}