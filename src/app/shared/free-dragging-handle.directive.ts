import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appFreeDraggingHandle]",
})
export class FreeDraggingHandleDirective {
  constructor(public elementRef: ElementRef<HTMLElement>) {}
}
