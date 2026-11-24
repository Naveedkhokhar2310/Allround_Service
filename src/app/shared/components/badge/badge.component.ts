import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'green' | 'muted' | 'white' | 'location';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="allround-badge" [class]="'badge-' + variant()">
      @if (variant() === 'location') {
        <span class="badge-dot">●</span>
      }
      @if (prefix()) {
        <span class="badge-prefix">{{ prefix() }}</span>
      }
      <span class="badge-text"><ng-content></ng-content></span>
    </div>
  `,
  styles: [`
    :host {
      display: inline-block;
    }

    .allround-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-family: var(--font-family-base);
      font-weight: 700;
      line-height: 1.6;
      white-space: nowrap;
      letter-spacing: 1.32px;
      text-transform: uppercase;
      font-size: 11px;
    }

    .badge-dot {
      color: var(--color-green);
      font-size: 10px;
    }

    .badge-location {
      color: var(--color-white);
      letter-spacing: 1.1px;
    }

    .badge-green {
      color: var(--color-green);
    }

    .badge-muted {
      color: var(--color-muted);
    }

    .badge-white {
      color: var(--color-white);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  readonly variant = input<BadgeVariant>('muted');
  readonly prefix = input<string | null>(null);
}
