import {
  trigger,
  animate,
  transition,
  style,
} from '@angular/animations'

export const copyAnimation = trigger('copyIconAnimation', [
  transition(
    ':enter',
    [
      style({
        transform: 'translateX(100%)',
        opacity: 0,
      }),
      animate('200ms ease-out',
        style({
          transform: 'translateX(0)',
          opacity: 1,
        }),
      ),
    ],
  ),
  transition(
    ':leave',
    [
      style({
        transform: 'translateX(0)',
        opacity: 1,
      }),
      animate('200ms ease-out',
        style({
          transform: 'translateX(-100%)',
          opacity: 0,
        }),
      ),
    ],
  ),
])
