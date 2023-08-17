import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [],
})
export class CountryPageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      //Recibe el valor anterior y el objetivo del switchMap es que regrese un nuevo observable
      switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id ) )
    )
    .subscribe( country => {
      if( !country ){
        return this.router.navigateByUrl('');
      }
      console.log('TENEMOS UN PAIS');
      return;
    });
  }


}
