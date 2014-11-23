/**
 * jQuery Demonstration basic components
 */
$('document').ready(function()
{
//Dropdown start
	
	$('.myMenu > li').bind('mouseover', openSubMenu);
	$('.myMenu > li').bind('mouseout', closeSubMenu);
	
	function openSubMenu() {
		$(this).find('ul').css('visibility', 'visible');	
	};
	
	function closeSubMenu() {
		$(this).find('ul').css('visibility', 'hidden');	
	};
	
	$("#accordion").accordion();
//Dropdown END
});
