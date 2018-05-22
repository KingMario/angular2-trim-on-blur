import { Directive, HostListener, NgModule } from '@angular/core';

@Directive({
  selector: 'input[trimOnBlur]',
})
export class TrimOnBlurDirective {

  @HostListener('blur', [ '$event.target', '$event.target.value' ])
  onBlur (el: any, value: string): void {

    if ('function' === typeof value.trim && value.trim() !== value) {
      el.value = value.trim();
      el.dispatchEvent(new Event('input'));
    }

  }

}

@NgModule({
  declarations: [
    TrimOnBlurDirective,
  ],
  exports: [
    TrimOnBlurDirective,
  ],
})
export class TrimOnBlurModule {}
