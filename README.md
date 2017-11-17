# JS-in-CSS Patterns

Patterns for building simple Event-Driven Virtual Stylesheets. 100% CSS, plus the expressive power of JavaScript!


## In this repository

There is a simple JS-in-CSS pattern that can be used for writing individual event-driven virtual stylesheets. You can write CSS code, as well as include JS template string interpolation to compose stylesheets, and trigger recalculations of those stylesheets by listening to JavaScript events.

- [Simple JS-in-CSS Template](js-in-css.js)

In addition to writing stylesheets, since you can interpolate JavaScript at any point inside the virtual stylesheet you are able to easily extend your expressive ability by writing JavaScript functions that return CSS code as strings (sometimes in addition to doing other things). I call this writing 'mixins', and there is a very basic mixin pattern included here as well that forms the base of many useful mixins listed below.

- [Simple Mixin Template](mixin.js)

Last, to demonstrate some ways in which the JS-in-CSS patterns for writing event-driven virtual stylesheets can be used together with mixins to extend CSS's styling ability I've included a modern container queries demo page that shows off a wide variety of tests that are useful for styling:

- [Container Queries Demo using JS-in-CSS](tests/container-queries.html)

And to prove how simple and flexible these patterns are, I've included examples of JS-in-CSS patterns written for legacy versions of IE, demonstrating that this way of building sites has been possible for a long time already and doesn't rely on new features such as [Resize Observer](https://wicg.github.io/ResizeObserver) or [Houdini](http://ishoudinireadyyet.com) to achieve (though they will offer some amazing improvements some day!)

- [Container Queries with JS-in-CSS in IE8](tests/ie8-jsincss.html)
- [Container Queries with JS-in-CSS in IE7](tests/ie7-jsincss.html)
- [Container Queries with JS-in-CSS in IE6](tests/ie6-jsincss.html)


## Compatible Mixins

- [Cascading JS Variables](https://github.com/tomhodgins/cascading-js-variables)
- [Container Queries Mixin](https://gist.github.com/tomhodgins/fc42b334beaafc75a271b1ef7c8e33ee) (stylesheet version with `$this`, functions as tests)
- [reproCSS/ancestor-selector](https://github.com/tomhodgins/reprocss#ancestor-selector-mixin)
- [reproCSS/aspect-ratio](https://github.com/tomhodgins/reprocss#aspect-ratio-mixin)
- [reproCSS/auto-expand](https://github.com/tomhodgins/reprocss#auto-expand-mixin)
- [reproCSS/closest-selector](https://github.com/tomhodgins/reprocss#closest-selector-mixin)
- [reproCSS/container-queries](https://github.com/tomhodgins/reprocss#container-queries-mixin) (rule version, strings as tests)
- [reproCSS/elder-selector](https://github.com/tomhodgins/reprocss#elder-selector-mixin)
- [reproCSS/parent-selector](https://github.com/tomhodgins/reprocss#parent-selector-mixin)
- [reproCSS/prev-selector](https://github.com/tomhodgins/reprocss#prev-selector-mixin)
- [reproCSS/scoped-eval](https://github.com/tomhodgins/reprocss#scoped-eval-mixin)
- [reproCSS/xpath-selector](https://github.com/tomhodgins/reprocss#xpath-selector-mixin)
- [respec](https://github.com/tomhodgins/respec)


## Similar JS-in-CSS Patterns

### [PrinCSS](https://gist.github.com/tomhodgins/1b7ac98825ed31afaae972a1b24bc03b)

Simple JSinCSS pattern with add, remove, and debounce functions

### [reproCSS](https://github.com/tomhodgins/reprocss)

A JavaScript plugin that adds a `process=""` attribute to `<style>` tag in HTML, and makes it easy to reprocess JS-in-CSS on specific JavaScript events

### [Skopein](https://gist.github.com/tomhodgins/8adce21101badac36f36c9205dd93f3b)

Scope `$this` in an external stylesheet to a selector (and events)

### [interpolate ${} in CSS](https://gist.github.com/tomhodgins/b8697d6599b2cda60bb7e77e5f2387fe)

Interpolate JS anywhere in CSS with `${}` inside `<style>` innerHTML and `<link rel=stylesheet href>`

### [JIC](https://codepen.io/tomhodgins/pen/EwLBza)

CSS with JS interpolation using `${}` written using external stylesheets (authored as CSS)

### [Slinky](https://github.com/tomhodgins/slinky)

Add JavaScript tests to `<link>` tags to toggle stylesheets


## More Resources

- [Useful Tests for JS-Powered Styling](https://codepen.io/tomhodgins/post/useful-tests-for-js-powered-styling)
- [Style Scoping Levels 1, 2, & 3](https://s.codepen.io/tomhodgins/debug/pWJNYw)
- [Three Levels of Scoping (JS Code)](https://gist.github.com/tomhodgins/aba076662287b5badae2c0955672a9c2)
- [Responsive.Style/Techniques](http://responsive.style/techniques)
- [Responsive.Style/Plugins](http://responsive.style/plugins/)