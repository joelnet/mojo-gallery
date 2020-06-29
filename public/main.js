const showImage = (image) => {
  const dataSrcSet = image.getAttribute('data-srcset')
  const dataSrc = image.getAttribute('data-src')
  if (dataSrcSet) {
    image.setAttribute('srcset', dataSrcSet)
    image.removeAttribute('data-srcset')
  }
  if (dataSrc) {
    image.setAttribute('src', dataSrc)
    image.removeAttribute('data-src')
  }
}

const onLoad = () => {
  onScroll()
}

const onScroll = () => {
  const scrollPosition =
    window.scrollY +
    (window.innerHeight || document.documentElement.clientHeight)

  const elements = document.querySelectorAll(
    'source[data-srcset],img[data-src]'
  )
  Array.from(elements).map((element) => {
    const top = element.getBoundingClientRect().top

    if (top !== 0 && top < scrollPosition) {
      showImage(element)
      console.debug(`loading image ${element.srcset || element.src}`)
    }
  })
}

window.addEventListener('load', onLoad)
window.addEventListener('scroll', onScroll)
