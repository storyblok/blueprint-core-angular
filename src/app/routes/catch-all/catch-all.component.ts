import { Component, ChangeDetectionStrategy, inject, computed, OnInit, linkedSignal, input, } from '@angular/core';
import { type ISbStoryData, type SbBlokData, SbBlokDirective, LivePreviewService } from '@storyblok/angular';

@Component({
  selector: 'app-catch-all',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SbBlokDirective],
  template: `
    <div class="container">
    @if (storyContent(); as content) {
      <ng-container [sbBlok]="content" />
    } @else {
      <div class="not-found">
        <h2>Page not found</h2>
        <p>The requested page could not be found.</p>
      </div>
    }
  </div>
  `,
})
export class CatchAllComponent implements OnInit {
  private readonly livePreview = inject(LivePreviewService);

  // Story data from route resolver
  readonly storyInput = input<ISbStoryData | null>(null, { alias: 'story' });

  // Writable signal that can be updated by live preview
  readonly story = linkedSignal(() => this.storyInput());

  readonly storyContent = computed(() => this.story()?.content as SbBlokData | undefined);

  ngOnInit(): void {
    // Enable live preview updates
    this.livePreview.listen((updatedStory) => {
      this.story.set(updatedStory);
    });
  }
}