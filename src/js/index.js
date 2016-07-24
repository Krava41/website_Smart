(() => 
{
	"use strict"

	NodeList.prototype[Symbol.iterator] = [][Symbol.iterator]
	console.log("It's ok!!!")

	const $ = (selector) => document.querySelector(selector)

	let $body = $('body')
	let $main = $('.main')
	let $design = $('.design')
	let $develop = $('.develop')
	let $tech = $('.tech')
	let $seo = $('.seo')
	let $support = $('.support')
	let $project = $('.project')

	console.log($body)

	// variables of templates

	let $tempDesign = $('.windowDesign')
	let $tempDevelop = $('.windowDevelop')
	let $tempTech = $('.windowTech')
	let $tempSeo = $('.windowSeo')
	let $tempSupport = $('.windowSupport')
	let $tempProject = $('.windowProject')	
	
	let $navLinks = document.querySelectorAll('.navLink')

	for (let $navLink of $navLinks) {

		console.log($navLink)
		$navLink.addEventListener('click', (event) =>
		{	
			let {target} = event

			console.log($body.className)

			switch (target.classList[0])
			{
				case 'design': 
					$main.innerHTML = $tempDesign.innerHTML
					$body.className = "bg_design"
					return
				case 'develop':
					$main.innerHTML = $tempDevelop.innerHTML
					$body.className = "bg_develop"
					return
				case 'tech': 
					$main.innerHTML = $tempTech.innerHTML
					$body.className = "bg_tech"
					return
				case 'seo': 
					$main.innerHTML = $tempSeo.innerHTML
					$body.className = "bg_seo"
					return
				case 'support': 
					$main.innerHTML = $tempSupport.innerHTML
					$body.className = "bg_support"
					return
				case 'project': 
					$main.innerHTML = $tempProject.innerHTML
					$body.className = "bg_project"
					return
				default: console.log('Ups. Error in nav!!')
			}
			
			event.preventDefault()
		})
	}
})()