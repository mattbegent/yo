# yo

A tiny 360 bytes transition library.

## How To

1. Include the minified version of the library at the bottom of your HTML.

2. Add an attribute of "data-yo" to the elements that you want to transition with the options explained below.

## Options

All transition options are separated by pipes. 

E.g. data-yo="background-color|yellow|orange|hover|300ms ease-in-out"

1. The first option is the property that you want to transition.
2. The second is the value that you want to start with.
3. The third is the value that you want to transition to.
4. The four option is the event you want the transition to be triggered by. This has to be a valid CSS selector. E.g. hover, focus, active (this is hover by default and is optional)
5. The fifth option is for the CSS transition options. E.g. 300ms ease-in-out (this is .3s by default and is optional)

## Full Example

	<div data-yo="transform|skew(20deg)|skew(-20deg)|hover|300ms ease-in-out">Yo</div>

For more examples see [http://mattbegent.github.io/yo/](http://mattbegent.github.io/yo/)

## Inspired by

This project was inspired by the excellent [animatable](https://github.com/LeaVerou/animatable/blob/gh-pages/index.js), but uses CSS transitions, insertRule to insert CSS and aims to be as tiny as possible. 