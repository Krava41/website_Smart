(function()
{
	"use strict"

	NodeList.prototype[Symbol.iterator] = [][Symbol.iterator]
	console.log("It's ok!!!")

	let $ = (selector) => document.querySelector(selector)
	let $All = (selector) => document.querySelectorAll(selector)

	let svgIcon = $('.aside').querySelector('svg')
	let g1 = svgIcon.querySelector("g")
	let g2 = svgIcon.nextElementSibling.querySelector("g")
	let g3 = svgIcon.nextElementSibling
					.nextElementSibling
					.querySelector("g")
	let g4 = svgIcon.nextElementSibling
					.nextElementSibling
					.nextElementSibling
					.querySelector("g")
	let g5 = svgIcon.nextElementSibling
					.nextElementSibling
					.nextElementSibling
					.nextElementSibling
					.querySelector("g")					
	let g6 = svgIcon.nextElementSibling
					.nextElementSibling
					.nextElementSibling
					.nextElementSibling
					.nextElementSibling
					.querySelector("g")
	let g7 = svgIcon.nextElementSibling
					.nextElementSibling
					.nextElementSibling
					.nextElementSibling
					.nextElementSibling
					.nextElementSibling
					.querySelector("g")
	let g8 = svgIcon.nextElementSibling
					.nextElementSibling
					.nextElementSibling
					.nextElementSibling
					.nextElementSibling
					.nextElementSibling
					.nextElementSibling
					.querySelector("g")
	let g9 = svgIcon.nextElementSibling
					.nextElementSibling
					.nextElementSibling
					.nextElementSibling
					.nextElementSibling
					.nextElementSibling
					.nextElementSibling
					.nextElementSibling
					.querySelector("g")

	if ( location.pathname == '/design_.html' )
		$('.design').className = $('.design').className.concat(' selected')
	if ( location.pathname == '/develop_.html' )
		$('.develop').className = $('.develop').className.concat(' selected')
	if ( location.pathname == '/tech_.html' )
	{
		$('.tech').className = $('.tech').className.concat(' selected')
		g1.setAttribute("id", "icon1")
		g2.setAttribute("id", "icon2")
		g3.setAttribute("id", "icon3")
		g4.setAttribute("id", "icon4")
		g5.setAttribute("id", "icon5")
		g6.setAttribute("id", "icon6")
		g7.setAttribute("id", "icon7")
		g8.setAttribute("id", "icon8")
		g9.setAttribute("id", "icon9")
	}
	if ( location.pathname == '/seo_.html' )
		$('.seo').className = $('.seo').className.concat(' selected')
	if ( location.pathname == '/support_.html' )
		$('.support').className = $('.support').className.concat(' selected')
	if ( location.pathname == '/projects_.html' )
		$('.project').className = $('.project').className.concat(' selected')
	if ( location.pathname == '/contacts_.html' )
		$('.contacts').className = $('.contacts').className.concat(' selected')

})()