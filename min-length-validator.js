import { IronValidatorBehavior } from '@polymer/iron-validator-behavior/iron-validator-behavior.js';

import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
/**
Validates that the value has a certain minimal length

The validator ignores if the value is empty. This prevents
showing a warning message before the user started to enter
any content.
See Material Design specification:
"Show error text only after user interaction with a field. If the user inputs incorrect data, helper text may transform into error text."
@see https://material.io/guidelines/patterns/errors.html#errors-user-input-errors
*/
Polymer({
    is: 'min-length-validator',
    properties: {
        /**
        * Minimal length
        */
        minLength: Number
    },
    behaviors: [
        IronValidatorBehavior
    ],
    
    validate: function(value) {
        // Don't trigger warning if no value was entered
        return !value || value.length >= this.minLength;
    }
});
