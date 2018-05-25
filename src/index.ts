import { Directive, HostListener, NgModule } from '@angular/core';

@Directive({
  selector: 'input[trimOnBlur]',
})
export class TrimOnBlurDirective {

  @HostListener('blur', [ '$event.target', '$event.target.value' ])
  onBlur (el: any, value: string): void {

    if ('function' === typeof value.trim && value.trim() !== value) {
      el.value = value.trim();

      const event = document.createEvent('Event');
      event.initEvent('input', false, false);
      el.dispatchEvent(event);
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
