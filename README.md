# Angular Trim on Blur Directive

The directive helps to trim whitespaces of an input text value on blur.

It lies on a simple fact that *Angular listens to `input` event to bring the view-to-model binding into being*.

The compiled package is tested with Angular 5 and 6. To use it in Angular 4, you may import the .ts file directly (see *Usage*). For Angular 2, you may try it in Angular 4's way, but it's not guaranteed to work.

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
