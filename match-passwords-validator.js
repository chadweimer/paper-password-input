/*
Validates that the confirm password matches the entered password
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import { IronValidatorBehavior } from '@polymer/iron-validator-behavior/iron-validator-behavior.js';

import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';

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
