import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-value-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="value-card">
      <span class="value-number">{{ number() }}</span>
      <h3 class="value-title">{{ title() }}</h3>
      <p class="value-description">{{ description() }}</p>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .value-card {
      border-top: 1px solid var(--color-muted);
      padding-top: 24px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      transition: border-color var(--transition-normal);

      &:hover {
        border-color: var(--color-green);
      }
    }

    .value-number {
      font-size: 11px;
      font-weight: 700;
      color: var(--color-green);
      line-height: 1.6;
    }

    .value-title {
      font-size: 22px;
      font-weight: 600;
      color: var(--color-white);
      line-height: 1.3;
    }

    .value-description {
      font-size: 14px;
      font-weight: 400;
      color: var(--color-white);
      line-height: 1.6;
      opacity: 0.9;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValueCardComponent {
  readonly number = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
