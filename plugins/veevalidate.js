import Vue from "vue";
import { ValidationProvider, extend, ValidationObserver } from "vee-validate";
import validator from "validator";
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

/**
 * --------------------------------------------------
 *  Validation rules
 * --------------------------------------------------
 */

extend("email", {
  message: "Invalid email address",
  validate: validator.isEmail
});

extend("required", {
  validate(value) {
    return {
      required: true,
      valid: ["", null, undefined].indexOf(value) === -1
    };
  },
  computesRequired: true,
  message: "Required"
});
