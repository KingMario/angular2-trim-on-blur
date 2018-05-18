# Angular Trim on Blur Directive

The directive helps to trim whitespaces from the end of an input text value on blur.

## Usage

1. Install `ng2-trim-on-blur`.

  **Angular 5**
  ```bash
    npm i ng2-trim-on-blur
  ```

2. Import `TrimOnBlurModule` to your Angular module.

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

3. Add the "trimOnBlur" attribute to an input element.
  ```html
     <input type="text" ... trimOnBlur>
  ```

---
Good luck.
