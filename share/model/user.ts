import * as validator from 'validator';
import {Email, Require} from '../util/validator.decorator';

export class User {

    @Require()
    @Email()
    email: string;

    @Require()
    password: string;

}