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

const showImages = () => {
  const images = document.querySelectorAll('img, source')
  Array.from(images).map(showImage)
}

const onLoad = () => {
  console.log('loaded')
  onScroll()
  //showImages()
}

const onScroll = () => {
  const scrollPosition =
    window.scrollY +
    (window.innerHeight || document.documentElement.clientHeight)

  const elements = document.querySelectorAll('source[data-srcset')
  Array.from(elements).map((element) => {
    const top = element.getBoundingClientRect().top

    if (top === 0) {
      console.log(element)
      console.log(element.getBoundingClientRect())
    } else if (top < scrollPosition) {
      showImage(element)
      //console.log(`loading image ${element.srcset || element.src}`)
    }
  })
}

window.addEventListener('load', () => {
  setTimeout(() => onLoad, 1000)
})
window.addEventListener('scroll', onScroll)
