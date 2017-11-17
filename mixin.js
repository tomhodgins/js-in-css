// JS-in-CSS Mixin Template

function mixin(selector, rule) {

  var tag = document.querySelectorAll(selector)
  var style = ''
  var count = 0

  for (var i=0; i<tag.length; i++) {

    var attr = selector.replace(/\W+/g, '')

    tag[i].setAttribute('data-mixin-' + attr, count)

    style += '\n[data-mixin-' + attr + '="' + count + '"] {\n'
             + '  ' + rule + '\n'
             + '}\n'

    count++

  }

  return style

}