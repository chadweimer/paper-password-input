import { IronValidatorBehavior } from '@polymer/iron-validator-behavior/iron-validator-behavior.js';

import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
/*
Validates that the confirm password matches the entered password
*/
Polymer({
    is: 'match-passwords-validator',
    properties: {
        /**
        * Entered password
        */
        password: String
    },
    behaviors: [
        IronValidatorBehavior
    ],
    
    validate: function(value) {
        // Ignore if no confirm password was entered
        return !value || value === this.password;
    }
});
