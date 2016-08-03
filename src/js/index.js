(function()
{
	"use strict"

	NodeList.prototype[Symbol.iterator] = [][Symbol.iterator]
	console.log("Runing index.js!!!")

	function $(selector)
	{
		return document.querySelector(selector)
	}

	function $All(selector)
	{
		return document.querySelectorAll(selector)
	}
	
	function idIcon()
	{	
		var $svgs = $('.aside').querySelectorAll('svg')
		var g = []
		var index = 0

		Array.from($svgs).forEach(function ($svg, index)
		{
			g[index] = $svg.querySelector("g")
			g[index++].setAttribute("id", "icon" + index)
		})
	}

// Page Tech.html display
	if ( location.pathname == '/design_.html' )
		$('.design').className = $('.design').className.concat(' selected')
	if ( location.pathname == '/develop_.html' )
		$('.develop').className = $('.develop').className.concat(' selected')
	if ( location.pathname == '/tech_.html' )
	{
		$('.tech').className = $('.tech').className.concat(' selected')
		idIcon()
	}
	if ( location.pathname == '/seo_.html' )
		$('.seo').className = $('.seo').className.concat(' selected')
	if ( location.pathname == '/support_.html' )
		$('.support').className = $('.support').className.concat(' selected')
	if ( location.pathname == '/projects_.html' )
		$('.project').className = $('.project').className.concat(' selected')
	if ( location.pathname == '/contacts_.html' )
		$('.contacts').className = $('.contacts').className.concat(' selected')

// Text link animate (print, run and hide)
 	var $text = $("#smart").querySelectorAll("tspan")
 	var $text1 = $("#text_prof").querySelectorAll("tspan")
 	var $texts = Array.from($text).concat(Array.from($text1))
 	var index = 0
 	var	dxFactor = -6;
	var opacityFactor = 1

 //Function 'letter' print letter
    function letter(node, nodes)
    {
       	if ( index > nodes.length )
    	{
    		index = 0;
    		dx()
    		return
   		}
   	
    	node.style.visibility = "visible"
       	setTimeout(function() {letter(nodes[index++], nodes)}, 250 )
    }

//Fuction 'dx' move and opacity letter
	function dx()
	{
		if ( dxFactor == 1500 ) return
		
		$texts[$texts.length-1].setAttribute("dx", dxFactor++)
		$texts[$texts.length-1].setAttribute("fill-opacity", opacityFactor -= 0.05)
		$texts[$texts.length-2].setAttribute("dx", dxFactor++)
		$texts[$texts.length-2].setAttribute("fill-opacity", opacityFactor -= 0.05)		
		$texts[$texts.length-3].setAttribute("dx", dxFactor++)
		$texts[$texts.length-3].setAttribute("fill-opacity", opacityFactor -= 0.05)
		$texts[$texts.length-4].setAttribute("dx", dxFactor++)
		$texts[$texts.length-4].setAttribute("fill-opacity", opacityFactor -= 0.005)
		$texts[$texts.length-5].setAttribute("dx", dxFactor++)
		$texts[$texts.length-5].setAttribute("fill-opacity", opacityFactor -= 0.005)
		$texts[$texts.length-6].setAttribute("dx", dxFactor++)
		$texts[$texts.length-6].setAttribute("fill-opacity", opacityFactor -= 0.005)		
		$texts[$texts.length-7].setAttribute("dx", dxFactor++)
		$texts[$texts.length-7].setAttribute("fill-opacity", opacityFactor -= 0.001)
		$texts[$texts.length-8].setAttribute("dx", dxFactor++)
		$texts[$texts.length-8].setAttribute("fill-opacity", opacityFactor -= 0.001)

		setTimeout(dx, 100)
	}

	 letter($texts[0], $texts)
// END Text link animate (print, run and hide)
})()