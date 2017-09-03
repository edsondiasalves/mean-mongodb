import { Component } from '@angular/core';
import { SeriesService } from "../services/series.service";

@Component({
  selector: 'series-list',
  template: "<div>Bazinga</div>",
  providers: [SeriesService]
})
export class SeriesComponent {
    constructor(private seriesService: SeriesService) {
        let series = this.seriesService.getAllSeries();
        console.log(series);
     }
}