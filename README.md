**[Blog post about the element](https://medium.com/collaborne-engineering/password-input-for-polymer-92f1b98f2ca9#.inaeg82yb)**


paper-password-input [![Build Status](https://travis-ci.com/chadweimer/paper-password-input.svg?branch=master)](https://travis-ci.com/chadweimer/paper-password-input) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@cwmr/paper-password-input)
=========

`paper-password-input` provides a Material Design input field to enter passwords. The web component is built with [Polymer](https://www.polymer-project.org).

To use this element:

`npm install @cwmr/paper-password-input`

<!--
```
<custom-element-demo>
  <template>
    <script type="module" src="paper-password-input.html"></script>
    <script type="module" src="min-length-validator.html"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<min-length-validator id="min-length-validator" min-length="6"></min-length-validator>
<paper-password-input
    auto-validate
    validator="min-length-validator"
    error-message="Enter at least 6 characters">
</paper-password-input>
```


## License

    This software is licensed under the Apache 2 license, quoted below.

    Copyright 2011-2016 Collaborne B.V. <https://github.com/Collaborne/>
    Copyright 2018 Chad Weimer <https://github.com/chadweimer>

    Licensed under the Apache License, Version 2.0 (the "License"); you may not
    use this file except in compliance with the License. You may obtain a copy of
    the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
    WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
    License for the specific language governing permissions and limitations under
    the License.
