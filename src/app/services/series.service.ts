import { Injectable } from '@angular/core';
import { Serie } from "../model/serie";

@Injectable()
export class SeriesService {
    getAllSeries(): Serie[] {
        return [
            {
                id: 1,
                name: "Game Of Thrones",
                description: "Umas pá de gente matando e querendo reinar",
                year: 2011,
                rating: 10
            },
            {
                id: 2,
                name: "Dexter",
                description: "Um cara brabo que mata o povo ruim",
                year: 2008,
                rating: 9.6
            }
        ]
    }

    includeSerie(serie: Serie): boolean{
        return true;
    }
}