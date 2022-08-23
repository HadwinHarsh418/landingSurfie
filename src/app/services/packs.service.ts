import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PacksService {
    apiUrl: string;
    message: string = '';
    public bankDetails: any = null;


    constructor(
        private http: HttpClient,
    ) {
        this.apiUrl = environment.url
    }


    loadSurPods(): Observable<any> {
        return this.http.get(`${this.apiUrl}/getPods`)
    }

    contactUs(body: any): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set('Accept', 'application/json; charset=utf-8');
        return this.http.post(`${this.apiUrl}/contactUs`, body, { headers: headers })
    }

    getAllSpots(id?: any, searchBody?: any): any {
        return this.http.get(`${this.apiUrl}/getSpot${id ? '/' + id : ''}?near_by=${searchBody?.nearBy}&good_for=${searchBody?.goodBy}&region=${searchBody?.region}&language=${''}`)
        // .pipe(map(data => {getSpot${id ? '/' + id : ''}?type=${}`
        //   return this.auth.getDecode(data);
        // }));
    }

    loadExperience(searchBody?: any): Observable<any> {
        return this.http.get(`${this.apiUrl}/getAllExperience?type=${searchBody?.allTYPE}&day_time=${searchBody?.daytimeBy}&language=${searchBody?.langBy}`)
    }


}
