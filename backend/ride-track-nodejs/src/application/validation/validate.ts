const Validator = require('validatorjs');

export const validator = async (body: any, rules: any, customMessages: any, callback: any) => {
    const validation = new Validator(body, rules, customMessages);
    validation.passes(() => callback(null, true));
    validation.fails(() => callback(validation.errors, false));
}