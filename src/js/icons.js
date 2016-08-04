// add 'id' for hide icon
	function idIcon()
	{	
		var $svgs = document.querySelector('.aside').querySelectorAll('svg')
		var g = []
		var index = 0

		Array.from($svgs).forEach(function ($svg, index)
		{
			g[index] = $svg.querySelector("g")
			g[index++].setAttribute("id", "icon" + index)
		})
	}
	idIcon()
// END add 'id' for hide icon
