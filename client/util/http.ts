import * as rx from 'rxjs';
import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';


@Injectable()
export class HttpManager {

    constructor(private http: Http) {
    }

    get(url) {
        return this.http.get(url);
    }

    post(url: string, data: any) {

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        var obersable = this.http.post(url, JSON.stringify(data), { headers: headers });

        return obersable;
    }

    delete(url: string) {

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        var obersable = this.http.delete(url, { headers: headers });

        return obersable;
    }


}