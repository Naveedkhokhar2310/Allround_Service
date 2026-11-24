import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ArrowDirection = 'right' | 'down' | 'up' | 'none';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (href()) {
      <a
        [href]="href()"
        [target]="target()"
        [rel]="target() === '_blank' ? 'noopener noreferrer' : null"
        class="allround-btn"
        [class.btn-primary]="variant() === 'primary'"
        [class.btn-secondary]="variant() === 'secondary'"
        [class.btn-outline]="variant() === 'outline'"
        [class.btn-ghost]="variant() === 'ghost'"
        [class.btn-sm]="size() === 'sm'"
        [class.btn-md]="size() === 'md'"
        [class.btn-lg]="size() === 'lg'"
      >
        <span class="btn-text">
          @if (label()) {
            {{ label() }}
          }
          <ng-content></ng-content>
        </span>
        @if (arrowDirection() !== 'none') {
          <span class="btn-arrow" [class]="'arrow-' + arrowDirection()">
            @switch (arrowDirection()) {
              @case ('right') { → }
              @case ('down') { ↓ }
              @case ('up') { ↑ }
            }
          </span>
        }
      </a>
    } @else {
      <button
        [type]="type()"
        [disabled]="disabled()"
        class="allround-btn"
        [class.btn-primary]="variant() === 'primary'"
        [class.btn-secondary]="variant() === 'secondary'"
        [class.btn-outline]="variant() === 'outline'"
        [class.btn-ghost]="variant() === 'ghost'"
        [class.btn-sm]="size() === 'sm'"
        [class.btn-md]="size() === 'md'"
        [class.btn-lg]="size() === 'lg'"
        [attr.aria-label]="ariaLabel() || label()"
      >
        <span class="btn-text">
          @if (label()) {
            {{ label() }}
          }
          <ng-content></ng-content>
        </span>
        @if (arrowDirection() !== 'none') {
          <span class="btn-arrow" [class]="'arrow-' + arrowDirection()">
            @switch (arrowDirection()) {
              @case ('right') { → }
              @case ('down') { ↓ }
              @case ('up') { ↑ }
            }
          </span>
        }
      </button>
    }
  `,
  styles: [`
    :host {
      display: inline-block;
    }

    .allround-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      font-family: var(--font-family-base);
      font-weight: 700;
      border-radius: var(--border-radius-md);
      transition: all var(--transition-normal);
      cursor: pointer;
      text-decoration: none;
      line-height: 1.45;
      white-space: nowrap;
      user-select: none;
      box-sizing: border-box;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    .btn-text {
      display: inline-block;
    }

    // Sizes
    .btn-sm {
      padding: 10px 16px;
      font-size: 13px;
      gap: 12px;
      .btn-arrow { font-size: 16px; }
    }

    .btn-md {
      padding: 17px 24px;
      font-size: 14px;
      .btn-arrow { font-size: 20px; font-weight: 500; }
    }

    .btn-lg {
      padding: 20px 32px;
      font-size: 16px;
      .btn-arrow { font-size: 22px; }
    }

    // Variants (Figma accurate)
    .btn-primary {
      background-color: var(--color-green);
      color: var(--color-navy);
      border: 1px solid transparent;

      &:hover:not(:disabled) {
        background-color: var(--color-green-hover);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(131, 201, 154, 0.35);
      }
    }

    .btn-secondary {
      background-color: var(--color-white);
      color: var(--color-navy);
      border: 1px solid var(--color-border);

      &:hover:not(:disabled) {
        border-color: var(--color-navy);
        transform: translateY(-2px);
        box-shadow: var(--shadow-subtle);
      }
    }

    .btn-outline {
      background-color: transparent;
      color: var(--color-white);
      border: 1px solid rgba(255, 255, 255, 0.3);

      &:hover:not(:disabled) {
        border-color: var(--color-white);
        background-color: rgba(255, 255, 255, 0.08);
      }
    }

    .btn-ghost {
      background-color: transparent;
      color: var(--color-navy);
      padding: 0;
      gap: 8px;

      &:hover:not(:disabled) {
        color: var(--color-green-hover);
        .btn-arrow {
          transform: translateX(4px);
        }
      }
    }

    .btn-arrow {
      display: inline-block;
      transition: transform var(--transition-fast);
      line-height: 1;
    }

    .arrow-down {
      transform: translateY(0);
    }

    .allround-btn:hover .arrow-right {
      transform: translateX(4px);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly label = input<string>('');
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<'sm' | 'md' | 'lg'>('md');
  readonly arrowDirection = input<ArrowDirection>('none');
  readonly type = input<'button' | 'submit'>('button');
  readonly disabled = input<boolean>(false);
  readonly href = input<string | null>(null);
  readonly target = input<string>('_self');
  readonly ariaLabel = input<string | null>(null);
}
