import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { StoryblokComponent, type SbBlokData } from '@storyblok/angular';

export interface GridBlok extends SbBlokData {
  columns?: SbBlokData[];
}

@Component({
  selector: 'app-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StoryblokComponent],
  template: `
    <div class="grid">
      <sb-component [sbBlok]="blok().columns" />
    </div>
  `,
})
export class GridComponent {
  readonly blok = input.required<GridBlok>();
}
