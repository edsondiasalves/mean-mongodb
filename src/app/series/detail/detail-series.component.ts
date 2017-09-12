import { Component } from '@angular/core';
import { SeriesService } from "../../services/series.service";
import { Serie } from "../../model/serie";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: '',
  templateUrl: "app/series/detail/detail-series.component.html",
  providers: [SeriesService]
})
export class DetailSeriesComponent {
  serie: Serie = new Serie();

  constructor(
    private seriesService: SeriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.detailsSerie();
  }

  detailsSerie(): void {
    this.route.params.subscribe(params => {

      if (!params.id){
        this.goBack();
      }

      this.seriesService.getSerieById(params.id)
        .subscribe(serie_ => {
          this.serie = serie_;
        });
    });
  }

  goBack(): void {
    this.router.navigate(["list"])
  }

  excludeSerie(): void {
    this.seriesService.deleteSerie(this.serie.id)
      .subscribe(result => {
        if (result) {
          this.goBack();
        }
      });
  }
}