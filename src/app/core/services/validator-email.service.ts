import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { Observable, map, of } from 'rxjs';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { QueryUser } from 'src/app/interfaces/userData.interface';
import { ObservablePropertiesService } from 'src/app/services/observable-properties.service';

@Injectable({
  providedIn: 'root'
})
export class ValidatorEmail implements AsyncValidator {

  constructor( private http: HttpClient, private obsService: ObservablePropertiesService ) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value

    return this.http.get<QueryUser>(`${environment.api_url}/any-query/usuarios/${email}`)
      .pipe(
        map((resp: QueryUser) => {
          if (resp.results.length > 0) {
            this.obsService.$emailTaken.emit(true);
            return of({taken: true})
          } else {
            this.obsService.$emailTaken.emit(false);
            return null
          }
        })
      )
  }
}
