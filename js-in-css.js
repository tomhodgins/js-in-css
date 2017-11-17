// JS-in-CSS

function JSinCSS() {

  var tag = document.querySelector('#JSinCSS')

  if (!tag) {

    tag = document.createElement('style')
    tag.id = 'JSinCSS'
    document.head.appendChild(tag)

  }

  // The event-driven virtual stylesheet
  tag.innerHTML = ``

}

// Reprocess 'JSinCSS' stylesheet on these events
window.addEventListener('load', JSinCSS)
window.addEventListener('resize', JSinCSS)
window.addEventListener('input', JSinCSS)
window.addEventListener('click', JSinCSS)