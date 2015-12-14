$('.code-toggle').each(function(idx, el){
	let $codeBox = $(el).parent().next(), codeBox = $codeBox[0];
	codeBox.style.height = 'auto';
	$codeBox.data('height', codeBox.clientHeight + 'px');
	codeBox.style.height = '';
});
$('body').on('click', '.code-toggle', function(e){
	let $codeBox = $(this).parent().next(), codeBox = $codeBox[0];
	$(this).parents('.code-box').toggleClass('code-show-demo');
	if (codeBox.style.height) {
		codeBox.style.height = '';
	} else {
		codeBox.style.height = $codeBox.data('height');
	}
});
