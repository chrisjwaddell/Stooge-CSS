# Animation

Animation in the Stooge CSS context refers to the *hover* and *focus* (button click) states.

## Text Animation
The table below shows the text properties that can be animated.
*Hover* and *focus* states can be treated seperately or can be treated the same together. This is relevant for animation on buttons, fields, anchor tags and other components which have both *hover* and *focus* CSS events.
The *hover-* group of class names are for hover only, when you hover away, it goes back to normal state.
The *focus-* group of class names are for focus only. The focus state happens when you use the keyboard to tab into it or click on something, and is lost when you tab into or click on something else.
The *hf-* (hover and focus) group of class names are hover and focus combined. When you hover over something, the effect begins, and if you click on it and hover away, the effect stays, unlike with either state on their own.

Font properties below can be animated on hover and on focus. They come with default transition. For color animation on text, see the Color Animation section.

Animation on colors must include a transition class. If you do animation on multiple properties, use the *tr-all* class.



| Property |Abbrev| Example |
|----------|--------|--------|
| font-weight | hf/hover/focus-fw-1/2/3/4/5/6/7/8/9 | |
| font-weight | hf/hover/focus-fw-normal | |
| font-weight | hf/hover/focus-bold | |
| font-style | hf/hover/focus-italic | |
| font-style | hf/hover/focus-fs-normal | |
| text-decoration | hf/hover/focus-underline | |
| text-decoration | hf/hover/focus-strike | |
| text-decoration | hf/hover/focus-underline | |
| text-decoration | hf/hover/focus-no-underline | |
| font-style | hf/hover/focus-italic | |
| font-style | hf/hover/focus-fs-normal | |
| text-shadow | hover-ts-11/21/31/12/22/32/41/42/43 | |
| text-shadow | hover-ts-11/21/31/12/22/32/41/42/43 | |

## Color Animation
Animations can be done on colors in the following properties: *background-color*, *border-color* or *color*.

Hover and focus states are treated the same for color unlike for Text and General animation.

| Property |Abbrev| Example |
|----------|--------|--------|
| background-color | bg-(color-ID) | bg-orange-12 |
| border-color | b-(color-ID) | b-teal-16 |
| color | (color-ID) | green-15 |

A transition class needs to be added to get smoother animation timing. See *Transition classes* below.

For a full list of colors, see:
https://chrisjwaddell.github.io/Stooge-CSS/index.html#colors


## Box model Animations
| Class name  | Description |
|----------|--------|
| hf/hover/focus-outline | outline: 1px solid; - on hover, on focus or both |
| hf/hover/focus-outline-transparent | outline: 1px transparent; - on hover, on focus or both |
| hf/hover/focus-ou-0 | outline: 0; - on hover, on focus or both |
| focus-shadow-1/2/3/4/5 | Shadow disappears on button press(focus), simulates a button pressing down  |

## Transform Animation
| Class name  | Description |
|----------|--------|
| rotate-45,90,135,180,225,270,315 | rotate transforms |
| hf/hover/focus-grow | Made an item get bigger |
| hf/hover/focus-grow-large | Made an item get even bigger |


## General Animation
| Class name  | Description |
|----------|--------|
| hf/hover/focus-dim | Dims an object a little |
| hf/hover/focus-glow | Made an item glow |
| pointer | cursor becomes pointer on hover |

## Transition classes
Color animation must have a transition class added for smooth transition.
Transition classes are included by default for text animations. If you want to do more than one animation, use the *tr-all* class.

| Class name  | Description |
|----------|--------|
| tr-bc, hover/focus-tr-bc |  Background transition |
| tr-bo, hover/focus-tr-bo |  Border transition  |
| tr-co, hover/focus-tr-co |  Font color transition  |
| tr-tr, hover/focus-tr-tr |  Transform transition  |
| tr-all, hover/focus-tr-all |  All transition for when you combine different animations  |
| tr-fast, hover/focus-tr-fast | Fast transition - 0.2s |
| tr-medium, hover/focus-tr-medium | Medium transition - 0.5s |
| tr-slow, hover/focus-tr-slow | Slow transition - 1s |

You can have different transitions statements for :hover and :focus with different timings however browsers may not all function as predicted.
An example of some classes used together:
*hover-outline hover-bg-blue-12 focus-bw-6 focus-underline hover-tr-all hover-tr-slow focus-tr-all focus-tr-fast*
hover - outline bg-blue-12 - slow transition (hover-tr-all hover-tr-slow)
focus - bw-6 underline  - fast transition ( focus-tr-all focus-tr-fast)

On hover, outline and blue background animation effects appear slow (1s). On click, thick border width and underline appear quickly (0.3s). This doesn't always happen perfectly.

