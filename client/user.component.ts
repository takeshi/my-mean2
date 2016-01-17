/// <reference path="../typings/lodash/lodash" />

import {Component, OnInit} from 'angular2/core';
import {User, Validator, ValidationResult} from '../share/share';
import {Http, Headers} from 'angular2/http';
import {HttpManager} from './util/http';
import {materialize} from './util/materialize';
import * as _ from 'lodash';

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

    errors: _.Dictionary<ValidationResult[]>;

    submit() {
        let errors = Validator.validate(User, this.user);
        if (errors) {
            this.errors = _.groupBy(errors, (err) => {
                return err.field;
            });
            console.log(this.errors);
            return;
        }
        this.errors = {};

        this.httpManager.post('/app/user', this.user)
            .subscribe((res) => {
                console.log('result', res.json());
                materialize.toast(`Success Add User ${res.json().email}`, 2000);
                this.user = new User();
                this.getUsers();
            }, (err) => {
                if (err.status === 400) {
                    this.errors = _.groupBy(err.json(), (err: ValidationResult) => {
                        return err.field;
                    });

                } else {
                    console.error('err', err);
                }
            });
    }

    destroy(user: User) {
        this.httpManager.delete(`/app/user/${user.id}`)
            .subscribe(() => {
                materialize.toast('Delete User ' + user.email, 2000);
                this.getUsers();
            });
    }

    ngOnInit() {
        this.getUsers();
    }

}

