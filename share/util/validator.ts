"use strict";

export interface ValidatorConfig {
    message?: string
}


export function createValidationDecorator(decorator: Function, config: ValidatorConfig, constraint: Constraint, required: boolean) {
    return function(instance: any, field: string) {
        addValidator(instance, field, decorator, config, constraint, required);
    }
}

function addValidator(instance: any, field: string, decorator: Function, config: ValidatorConfig, constraint: Constraint, required: boolean) {
    var validators = Validator.getValidators(instance.constructor);

    validators.push({
        validate: (instance: any) => {
            if (required && !instance[field]) {
                return null;
            }
            var result = constraint(instance[field]);
            if (result) {
                return null;
            }
            var message = config.message;
            return {
                target: instance,
                value: instance[field],
                field: field,
                message: message,
                decorator: decorator
            }
        }
    });
}

export interface Constraint {
    (instance: any): boolean;
}

export interface ValidationResult {

    target: any;
    value: any;
    field: string;
    message: string;
    decorator: Function;

}


interface ValidationInvoker {
    validate(instance: any): ValidationResult;
}

export abstract class Validator {
    static validators: ValidationInvoker[] = [];

    static getValidators(clazz: any): ValidationInvoker[] {
        if (!clazz.__validators) {
            clazz.__validators = [];
        }
        return clazz.__validators;
    }

    static validate(clazz: any, instance: any) {
        var results: ValidationResult[] = [];
        Validator.getValidators(clazz).forEach((validator) => {
            var result = validator.validate(instance);
            if (result) {
                results.push(result);
            }
        });
        if (results.length == 0) {
            return null;
        }
        return results;
    }
}
