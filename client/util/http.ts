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

        return this.http.post(url, JSON.stringify(data), { headers: headers });
    }

}