(() => 
{
	"use strict"

	NodeList.prototype[Symbol.iterator] = [][Symbol.iterator]
	console.log("It's ok!!!")

	const $ = (selector) => document.querySelector(selector)

	let $main = $('.main')
	let $design = $('.design')
	let $develop = $('.develop')
	let $tech = $('.tech')
	let $seo = $('.seo')
	let $support = $('.support')
	let $project = $('.project')
	
	let $navLinks = document.querySelectorAll('.navLink')

	for (let $navLink of $navLinks) {
		$navLink.addEventListener('click', () =>
		{	
			console.log(event.target.classList[0])

			switch (event.target.classList[0])
			{
				case 'design': 
					$main.innerHTML = $design.innerHTML 
					return
				case 'develop': 
					$main.innerHTML = $develop.innerHTML
					return
				case 'tech': 
					$main.innerHTML = $tech.innerHTML
					return
				case 'seo': 
					$main.innerHTML = $seo.innerHTML
					return
				case 'support': 
					$main.innerHTML = $support.innerHTML
					return
				case 'project': 
					$main.innerHTML = $project.innerHTML
					return
				default: console.log('Ups. Error in nav!!')
			}
		})
	}

	

})()