// preloader
let mask = document.querySelector('.preloader')
window.addEventListener('load', () => {
	document.body.classList.add('no-scroll')
	setTimeout(() => {
		mask.classList.add('preloader--hide')
	}, 50)
	setTimeout(() => {
		mask.remove()
		document.body.classList.remove('no-scroll')
	}, 850)
})

//header links  linear scroll
$('.nav__link').on('click', function () {
	let href = $(this).attr('href')

	$('html, body').animate(
		{
			scrollTop: $(href).offset().top,
		},
		{
			duration: 800, // по умолчанию «400»
			easing: 'linear', // по умолчанию «swing»
		}
	)

	return false
})

// scroll-down

$('.arrow-down-link').on('click', function () {
	let href = $(this).attr('href')

	$('html, body').animate(
		{
			scrollTop: $(href).offset().top,
		},
		{
			duration: 800, // по умолчанию «400»
			easing: 'linear', // по умолчанию «swing»
		}
	)

	return false
})

// scroll-up
$(function () {
	$('.scrollup').on('click', function () {
		$('html, body').animate({
			scrollTop: 0,
		})
	})
})
$(window).on('scroll', function () {
	if ($(this).scrollTop() > 200) {
		$('.scrollup').fadeIn()
	} else {
		$('.scrollup').fadeOut()
	}
})

// boorger menu

const tMenu = document.querySelector('.boorger>a')
const navBar = document.querySelector('.nav')

tMenu.addEventListener('click', function () {
	navBar.classList.toggle('active')
	tMenu.classList.toggle('active')
})
