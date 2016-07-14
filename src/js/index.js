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

	// variables of templates

	let $tempDesign = $('.windowDesign')
	let $tempDevelop = $('.windowDevelop')
	let $tempTech = $('.windowTech')
	let $tempSeo = $('.windowSeo')
	let $tempSupport = $('.windowSupport')
	let $tempProject = $('.windowProject')	
	
	let $navLinks = document.querySelectorAll('.navLink')

	for (let $navLink of $navLinks) {
		$navLink.addEventListener('click', () =>
		{	
			let {target} = event

			console.log(target.classList[0])

			switch (target.classList[0])
			{
				case 'design': 
					$main.innerHTML = $tempDesign.innerHTML 
					return
				case 'develop': 
					$main.innerHTML = $tempDevelop.innerHTML
					return
				case 'tech': 
					$main.innerHTML = $tempTech.innerHTML
					return
				case 'seo': 
					$main.innerHTML = $TempSeo.innerHTML
					return
				case 'support': 
					$main.innerHTML = $TempSupport.innerHTML
					return
				case 'project': 
					$main.innerHTML = $TempProject.innerHTML
					return
				default: console.log('Ups. Error in nav!!')
			}
		})
	}
})()