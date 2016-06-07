# ionic-toggle-password
Directive to show/hide password for Ionic apps.

## Installation

Install with bower (or download/clone).
```shell
bower install ionic-toggle-password
```

Add the `<script>` in your `index.html`.
```html
<script src="/bower_components/ionic-toggle-password/dist/ion-toggle-password.min.js"></script>
```

Add the dependency in your app.
```javascript
angular.module('App', ['ionTogglePassword']);
```
## Usage

Add the `toggle-password-checkbox` into your list and the `toggle-password-input` attribute to your password input.
```html
<ion-list>
	<ion-item class="item-input item-stacked-label">
		<span class="input-label">Enter password</span>
		<input type="password" placeholder="Enter the fucking password" toggle-password-input />
	</ion-item>
	<toggle-password-checkbox label="Show password" checkbox-class="checkbox-balanced"></toggle-password-checkbox>
</ion-list>
```

If you find something wrong, feel free to contribute with this repository or contact me.