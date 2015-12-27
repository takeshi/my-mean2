export interface ValidatorConfig {
    message?: string
}


export function createValidationDecorator(decorator: Function, config: ValidatorConfig, constraint: Constraint) {
    return function(instance: any, field: string) {
        addValidator(instance, field, decorator, config, constraint);
    }
}

function addValidator(instance: any, field: string, decorator: Function, config: ValidatorConfig, constraint: Constraint) {
    var validators = Validator.getValidators(instance.constructor);

    validators.push({
        validate: (instance: any) => {

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
    validate(clazz: any, instance: any): ValidationResult;
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
            var result = validator.validate(clazz, instance);
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
