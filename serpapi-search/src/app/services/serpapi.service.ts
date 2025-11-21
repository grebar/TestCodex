import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SerpApiResponse } from '../models/serpapi-response';
import { SearchOptions } from '../models/search-options';

@Injectable({ providedIn: 'root' })
export class SerpApiService {
  private readonly endpoint = 'https://serpapi.com/search';

  constructor(private http: HttpClient) {}

  search(options: SearchOptions): Observable<SerpApiResponse> {
    const start = Math.max(0, (options.page - 1) * 10);
    let params = new HttpParams()
      .set('engine', 'google')
      .set('q', options.query)
      .set('api_key', options.apiKey)
      .set('num', 10)
      .set('start', start)
      .set('hl', options.language);

    if (options.type === 'image') {
      params = params.set('tbm', 'isch');
    }

    if (options.dateRestrict) {
      params = params.set('tbs', `qdr:${options.dateRestrict}`);
    }

    if (options.siteSearch) {
      params = params.set('as_sitesearch', options.siteSearch);
    }

    return this.http.get<SerpApiResponse>(this.endpoint, { params }).pipe(
      map((res) => res),
      catchError((error) => {
        const message: string = error?.error?.error || 'Unknown error';
        return throwError(() => new Error(message));
      })
    );
  }
}
