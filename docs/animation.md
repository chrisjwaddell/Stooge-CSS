# Animation

Animation in the Stooge CSS context refers to the *hover* and *focus* (button click) states.

## Color Animation
Animations can be done on colors in the following properties: *background-color*, *border-color* or *color*.

Hover and focus states are treated the same for color unlike for Text and General animation.

| Property |Abbrev| Example |
|----------|--------|--------|
| background-color | bg-(color-ID) | bg-orange-12 |
| border-color | b-(color-ID) | b-teal-16 |
| color | (color-ID) | green-15 |

A transition class needs to be added to get smoother animation timing. See *Transition classes* below.

A full list of colors, see:
https://chrisjwaddell.github.io/Stooge-CSS/index.html#colors

## Text Animation
The table beolow shows the text properties that can be animated.
*Hover* and *focus* states are treated seperately or can be treated the same together.
The *hover-* group of class names are for hover only, when you hover away, it goes back to normal state.
The *focus-* group of class names are for focus only, when you click on something else, you lose the animation properties but they stay after you clicked the button but not on hover.
The *hf-* (hover, focus) group of class names are hover and focus combined. When you hover over something, the effect begins, and if you click on it and hover away, the effect stays, unlike with either state on their own.

The font properties below can be animated on hover and on focus (button click). For color animation on text, see the Color Animation section above.


| Property |Abbrev| Example |
|----------|--------|--------|
| font-weight | hf/hover/focus-ft-1/2/3/4/5/6/7/8/9 | |
| font-weight | hf/hover/focus-fw-normal | |
| font-weight | hf/hover/focus-bold | |
| font-style | hf/hover/focus-italic | |
| font-style | hf/hover/focus-fs-normal | |
| text-decoration | hf/hover/focus-underline | |
| text-decoration | hf/hover/focus-strike | |
| text-decoration | hf/hover/focus-underline | |
| text-decoration | hf/hover/focus-no-underline | |
| font-style | hf/hover/focus-italic
| font-style | hf/hover/focus-fs-normal
| text-shadow | hover-ts-11/21/31/12/22/32/41/42/43 | |


bg-animate - required for background animation
hover-background - transition on hover

rotate-45,90,135,180,225,270,315 - rotate transform


## General Animation

hover-shadow-fw5,7,9 - Shadow on hover
text-shadow-11,21,31,12,22,32 - Text shadow
fade, dim - classes for dim and fade
glow - Made an item glow
grow - Made an item get bigger
grow-large - Made an item get even bigger
shadow-hover - Show a shadow on hover


## Transition classes