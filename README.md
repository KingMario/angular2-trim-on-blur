# Angular Trim on Blur Directive

The directive helps to trim whitespaces of an input text value on blur.

It lies on a simple fact that *Angular listens to `input` event to bring the view-to-model binding into being*.

_* According to the description of [updateOn property of AbstractControlOptions interface](https://angular.io/api/forms/AbstractControlOptions), when updateOn is set to `blur` or `submit`, Angular listens to `blur` or `submit` event for model update. In this directive, `update-on-blur` case is handled in a hack way. No further processing is required for `update-on-submit` case._

Since extra `input` and `blur` events are dispatched, if you bind a callback to `input` event or `blur` event, the callback will be invoked twice on `input` or `blur`.

To overcome the disadvantage, a debounced function is recommended for the event binding.

The compiled package is tested with Angular 5 and 6. To use it in Angular 4, you may import the .ts file directly (see *Usage*). For Angular 2, you may try it in Angular 4's way, but it's not tested.

## Usage

1.Install `ng2-trim-on-blur`.

  ```bash
    npm i -S ng2-trim-on-blur
  ```

2.Import `TrimOnBlurModule` to your Angular module.

  **Angular 4**
```typescript
import { TrimOnBlurModule } from 'ng2-trim-on-blur/src';
@NgModule({
  imports: [
    ...
    TrimOnBlurModule,
    ...
  ],
  ...
```

  **Angular 5+**
```typescript
import { TrimOnBlurModule } from 'ng2-trim-on-blur';
@NgModule({
  imports: [
    ...
    TrimOnBlurModule,
    ...
  ],
  ...
```

3.Add the "trimOnBlur" attribute to an input element.
  ```html
     <input type="text" ... trimOnBlur>
  ```

4.Want to trim the value on input? Try [ngx-trim-directive](https://www.npmjs.com/package/ngx-trim-directive).

---
Good luck.
