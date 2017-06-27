const addAccordionSelectors = () => {
	document.querySelectorAll('.accordion')
		.forEach(node => {
			node.onclick = e => {
				
				if(	e.target.className !== "accordionButton" &&
					e.target.className !== "accordionTitle" &&
					e.target.className !== "accordionSpinnerBox" &&
					e.target.className !== "accordionSpinner"
				) return null;

				e.preventDefault();
				
				node.className = ~node.className.indexOf('accordionClose')
					? 'accordion'
					: 'accordion accordionClose';
			}
		})
}

require(["gitbook"], gitbook => {
	gitbook.events.bind("page.change", addAccordionSelectors);
});