/// <reference path="../../typings/validator/validator.d.ts" />
"use strict";

import * as validator from 'validator';
import {Email, Require} from '../util/validator.decorator';

export class User {

    id: string;

    @Require()
    @Email()
    email: string;

    @Require()
    password: string;

}