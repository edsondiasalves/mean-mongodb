import { Component } from '@angular/core';
import { SeriesService } from "../../services/series.service";
import { Serie } from "../../model/serie";

@Component({
  selector: 'series-list',
  templateUrl: "app/series/include/include-series.component.html",
  providers: [SeriesService]
})
export class IncludeSeriesComponent {
  serie: Serie = new Serie();
  
  constructor(private seriesService: SeriesService) {
  }

  includeSerie(){
    let result = this.seriesService.includeSerie(this.serie);
    if (result){
      this.serie = new Serie();
    }
  }
}