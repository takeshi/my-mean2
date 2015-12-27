import * as validator from 'validator';
import {ValidatorConfig, createValidationDecorator} from './validator';

export function Email(
    config: ValidatorConfig
        = { message: "Emailのフォーマットで入力してください" }) {

    return createValidationDecorator(Email, config, validator.isEmail);

}

export function Require(
    config: ValidatorConfig
        = { message: "必須入力です" }) {

    return createValidationDecorator(Require, config, (value) => {
        return !validator.isNull(value);
    });

}