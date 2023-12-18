import { Form as VeeForm, Field as VeeField,defineRule,ErrorMessage } from "vee-validate"
import {required, min_value,email,min,max,alpha_spaces as alphaSpaces, confirmed,not_one_of as excluded} from '@vee-validate/rules'
export default {
    install(app) {
        app.component("VeeForm", VeeForm);
        app.component("VeeField",VeeField);
        app.component("ErrorMessage",ErrorMessage);

        defineRule('required', required);
        defineRule('min',min);
        defineRule('max',max);
        defineRule('alpha_spaces',alphaSpaces);
        defineRule('email',email);
        defineRule('min_value',min_value);
        defineRule('confirmed',confirmed);
        defineRule('excluded',excluded);
    }
}