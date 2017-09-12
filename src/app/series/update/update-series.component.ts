import { Component } from '@angular/core';
import { SeriesService } from "../../services/series.service";
import { Serie } from "../../model/serie";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: '',
  templateUrl: "app/series/update/update-series.component.html",
  providers: [SeriesService]
})
export class UpdateSeriesComponent {
  serie: Serie = new Serie();

  constructor(private seriesService: SeriesService,
    private router: Router,
    private route: ActivatedRoute) {
    this.getSerie();
  }

  getSerie(): void {
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
    this.router.navigate(["list"]);
  }

  updateSerie(): void {
    this.seriesService.updateSerie(this.serie)
      .subscribe(result => {
        if (result) {
          console.log('updated');
        }
      });
  }
}