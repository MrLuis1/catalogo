import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { GetterUser, QueryUser, LoginPost, CreateUser, RegisterPost } from 'src/app/interfaces/userData.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user!: GetterUser;

  get userData(): GetterUser {
    return { ...this._user };
  }

  constructor( private http: HttpClient ) { }

  authUser( correo: string, password: string ) {
    const body = {
      correo,
      password
    }
    
    return this.http.post<LoginPost>(`${environment.api_url}/auth/login`, body)
      .pipe(
        tap(resp => {
          sessionStorage.setItem('token', resp.token);
          sessionStorage.setItem('uid', resp.usuario.uid);
          this._user = {
            correo: resp.usuario.correo,
            nombre: resp.usuario.nombre,
            token: resp.token,
            uid: resp.usuario.uid
          }
        }),
        map(resp => {
          return of(resp.ok)
        }),
        catchError(err => of(err.ok))
      );
  }

  getUser(): Observable<boolean> {
    let id;
    sessionStorage.getItem('uid') ? id = sessionStorage.getItem('uid') : id = '';
    return this.http.get<QueryUser>(`${environment.api_url}/any-query/usuarios/${id}`)
      .pipe(
        map(resp => {
          return of(resp.ok)
        }),
        catchError(err => of(err.ok))
      );
  }

  createUser(data: CreateUser) {
    const body = {
      empresa: data.empresa,
      nombre: data.nombre,
      correo: data.correo,
      password: data.password,
      role: "ADMIN_ROLE"
    }

    return this.http.post<RegisterPost>(`${environment.api_url}/usuarios`, body)
  }
}
