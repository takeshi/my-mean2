/// <reference path="./materializecss" />

import {Component, OnInit} from 'angular2/core';
import {User} from '../share/model';
import {Http, Headers} from 'angular2/http';
import {HttpManager} from './util/http';
import {materialize} from './materializecss';

@Component({
    selector: 'my-user',
    templateUrl: 'client/user.html'
})
export class UserComponent implements OnInit {

    constructor(private httpManager: HttpManager) {

    }

    user = new User();

    users: User[];

    private getUsers(callback?: (users: User[]) => void) {
        this.httpManager.get('/app/user')
            .subscribe((res) => {
                this.users = res.json();
                if (callback) {
                    callback(this.users);
                }
            });

    }

    submit() {
        
        this.httpManager.post('/app/user', this.user)
            .subscribe((res) => {
                console.log("aa",res);
                materialize.toast('successs', 1000);
            });
        console.log(this.user);
    }

    ngOnInit() {
        this.getUsers((users) => {
            console.log(users);
        });
        console.log(this);
    }

}

