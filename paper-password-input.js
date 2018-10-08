import '@polymer/polymer/polymer-legacy.js';

import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-styles/default-theme.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
/**
A Material Design input field to enter passwords

@demo demo/index.html
*/
Polymer({
    is: 'paper-password-input',
    _template: html`
    <style>
        .visibility-icon {
            color: var(--disabled-text-color);
            /** Bottom align visibility button with input box */
            height: 32px;
            width: 32px;
            padding: 0 4px;
            margin-top: -6px;
        }
    </style>
    
    <paper-input
        id="input"
        type="[[_getType(visible)]]"
        value="{{value}}"
        label="[[label]]"
        name="[[name]]"
        maxlength="[[maxlength]]"
        disabled="[[disabled]]"
        readonly="[[readonly]]"
        required="[[required]]"
        autofocus="[[autofocus]]"
        auto-validate="[[autoValidate]]"
        allowed-pattern="[[allowedPattern]]"
        invalid="{{invalid}}"
        validator="[[validator]]"
        error-message="[[errorMessage]]"
        char-counter="[[charCounter]]"
        always-float-label="[[alwaysFloatLabel]]">
        <paper-icon-button
            slot="suffix"
            icon="[[_getIcon(visible)]]"
            on-tap="_toggleVisible"
            class="visibility-icon"
            tabindex="-1"
            ></paper-icon-button>
    </paper-input>
    `,
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
