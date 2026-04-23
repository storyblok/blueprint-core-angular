import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { SbBlokDirective, type SbBlokData } from '@storyblok/angular';

export interface PageBlok extends SbBlokData {
  body?: SbBlokData[];
}

@Component({
  selector: 'app-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SbBlokDirective],
  template: `
    <div class="page">
      @for (blok of blok().body ?? []; track blok._uid) {
        <ng-container [sbBlok]="blok" />
      }
    </div>
  `,
})
export class PageComponent {
// Angular signal
  readonly blok = input.required<PageBlok>();
}