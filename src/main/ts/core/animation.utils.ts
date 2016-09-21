import {trigger, state, animate, transition, style, AfterViewInit} from '@angular/core';

export function fadeIn() {
    
    return trigger('openClose', [
      state('closed, void',
        style({ opacity: "0" })),
      state('opened',
        style({ opacity: "1" })),
      transition("closed <=> opened", [
        animate(200)
      ])
    ]);
    
}