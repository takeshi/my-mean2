/// <reference path="./materializecss" />

import {Component, OnInit} from 'angular2/core';
import {User, Validator, ValidationResult} from '../share/model';
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
                console.log("result", res.json());
            });

        var results = Validator.validate(User, this.user);
        console.log(results);
        console.log(this.user);
    }

    ngOnInit() {
        this.getUsers((users) => {
            console.log(users);
        });
        console.log(this);
    }

}

