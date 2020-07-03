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

const getScrollPosition = () =>
	window.scrollY + (window.innerHeight || document.documentElement.clientHeight)

const getHiddenImages = () =>
	Array.from(document.querySelectorAll('source[data-srcset],img[data-src]'))

const onScroll = () => {
	const elements = getHiddenImages()
	elements.map((element) => {
		const top = element.getBoundingClientRect().top

		if (top > 0 && top < getScrollPosition()) {
			showImage(element)
		}
	})
}

window.addEventListener('load', onLoad)
window.addEventListener('scroll', onScroll)
