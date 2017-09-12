import { Injectable } from '@angular/core';
import { Serie } from "../model/serie";
import { Http } from '@angular/http';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class SeriesService {

    constructor(private http: Http) {

    }

    getAllSeries(): Observable<Serie[]> {
        return this.http.get('/api/series/list')
            .map(s => s.json());
    }

    getSerieById(id: number): Observable<Serie> {
        return this.http.get('/api/series/get/' + id)
            .map(s => s.json());
    }

    includeSerie(serie: Serie): Observable<boolean> {
        return this.http.post('/api/series/insert', serie)
            .map(s => s.json());
    }

    deleteSerie(id: number): Observable<boolean> {
        return this.http.post('/api/series/insert', id)
        .map(s => s.json());
    }

    updateSerie(serie: Serie): Observable<boolean> {
        return this.http.post('/api/series/insert', serie)
        .map(s => s.json());
    }
}