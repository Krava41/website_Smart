(() => 
{
	"use strict"

	NodeList.prototype[Symbol.iterator] = [][Symbol.iterator]
	console.log("It's ok!!!")

	let $ = (selector) => document.querySelector(selector)
	let $All = (selector) => document.querySelectorAll(selector)

	if ( location.pathname == '/design_.html' )
		$('.design').className = $('.design').className.concat(' selected')
	if ( location.pathname == '/develop_.html' )
		$('.develop').className = $('.develop').className.concat(' selected')
	if ( location.pathname == '/tech_.html' )
		$('.tech').className = $('.tech').className.concat(' selected')
	if ( location.pathname == '/seo_.html' )
		$('.seo').className = $('.seo').className.concat(' selected')
	if ( location.pathname == '/support_.html' )
		$('.support').className = $('.support').className.concat(' selected')
	if ( location.pathname == '/projects_.html' )
		$('.project').className = $('.project').className.concat(' selected')
	if ( location.pathname == '/contacts_.html' )
		$('.contacts').className = $('.contacts').className.concat(' selected')

})()