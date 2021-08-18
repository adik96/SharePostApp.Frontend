import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap, debounce } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';

import { HttpEndpoints } from '../contstants/httpEndpoints';

import { LoginModel } from '../../shared/models/login.model';
const credentialsKey = 'currentUser';

@Injectable()
export class PostService {
    constructor(private http: HttpClient) {
    }

    getAll(): Observable<any> {
        const href = `${ HttpEndpoints.posts }`;
        return this.http.get<any>(href);
    }
}

