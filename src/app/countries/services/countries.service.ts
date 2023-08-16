import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  searchCapital( term: string): Observable<Country[]>{

    const url = `${ this.apiUrl }/capital/${ term }`;

    return this.http.get<Country[]>( url )
    .pipe(
      // tap( countries => console.log('Paso por el tap 1', countries)),
      // map( countries => [] ), //El operador map transforma la informacion
      // tap( countries => console.log('Paso por el tap 2', countries))
      // catchError( error => {
      //   console.log(error);
      //   return of([]);
      // })
      catchError( () => of([]))
    );
  }

}
