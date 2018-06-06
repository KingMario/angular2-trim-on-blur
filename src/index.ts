import { Directive, HostListener, NgModule } from '@angular/core';

@Directive({
  selector: 'input[trimOnBlur]',
})
export class TrimOnBlurDirective {

  private dispatchEvent (el, eventType) {
    const event = document.createEvent('Event');
    event.initEvent(eventType, false, false);
    el.dispatchEvent(event);
  }

  @HostListener('blur', [ '$event.target', '$event.target.value' ])
  onBlur (el: any, value: string): void {

    if ('function' === typeof value.trim && value.trim() !== value) {
      el.value = value.trim();

      this.dispatchEvent(el, 'input');
      this.dispatchEvent(el, 'blur'); // in case updateOn is set to blur
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
