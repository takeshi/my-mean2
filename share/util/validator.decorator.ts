"use strict";

import * as validator from 'validator';
import {ValidatorConfig, createValidationDecorator} from './validator';

export function Email(
    config?: ValidatorConfig) {
    config = config || { message: "Emailのフォーマットで入力してください" };
    return createValidationDecorator(Email, config, validator.isEmail, true);

}

export function Require(
    config?: ValidatorConfig) {
    config = config || { message: "必須入力です" };
    return createValidationDecorator(Require, config, (value) => {
        return !validator.isNull(value);
    }, false);

}