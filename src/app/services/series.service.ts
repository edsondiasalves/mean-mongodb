import { Injectable } from '@angular/core';

@Injectable()
export class SeriesService {
    getAllSeries() {
        return [
            {
                "name": "Game Of Thrones"
            },
            {
                "name": "Dexter"
            }
        ]
    }
}