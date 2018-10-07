/**
A Material Design input field to enter passwords

@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-styles/default-theme.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';

Polymer({
		is: 'paper-password-input',
		properties: {
        /**
         * True if the content of the password field is visible
         */
        visible: {
            type: Boolean,
            value: false
        },

        value: {
            type: String,
            notify: true
        },
        invalid: {
            type: Boolean,
            notify: true
        },
        label: String,
        name: String,
        disabled: Boolean,
        required: Boolean,
        readonly: Boolean,
        autofocus: Boolean,
        autoValidate: Boolean,
        validator: String,
        errorMessage: String,
        charCounter: Boolean,
        maxlength: Number,
        allowedPattern: String,
        alwaysFloatLabel: Boolean
		},

		validate: function() {
        return this.$.input.validate();
		},

		_getIcon: function(visible) {
        return visible ? 'icons:visibility' : 'icons:visibility-off';
		},
		_getType: function(visible) {
        return visible ? '' : 'password';
		},
		_toggleVisible: function() {
        this.visible = !this.visible;
		},
});
