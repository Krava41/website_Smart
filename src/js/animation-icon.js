(function()
{
	"use strict"

	NodeList.prototype[Symbol.iterator] = [][Symbol.iterator]
	console.log("Runing animation_icon.js. It's ok!!!")

	let $ = (selector) => document.querySelector(selector)
	let $All = (selector) => document.querySelectorAll(selector)

	let svgIcon = $('.aside').querySelector('svg').querySelector("g")
	svgIcon.setAttribute("id", "icon")
})()