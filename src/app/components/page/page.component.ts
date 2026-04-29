import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { type SbBlokData, StoryblokComponent } from '@storyblok/angular';

export interface PageBlok extends SbBlokData {
  body?: SbBlokData[];
}

@Component({
  selector: 'app-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StoryblokComponent],
  template: `
    <div class="page">
      <sb-component [sbBlok]="blok().body" />
    </div>
  `,
})
export class PageComponent {
// Angular signal
  readonly blok = input.required<PageBlok>();


}
