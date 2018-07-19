$(function(){
	// Load scrollbar
	$('.scrollbar-inner').scrollbar();

	// Load DataTable
	$('#table').DataTable({
    	"searching": false,
    	"info":     false,
    	"bLengthChange": false
    });

	// Mobile navigation switcher
	$('.toggle-nav').on('click', function(){
		$(this).toggleClass('active');
		$('.wrapper').toggleClass('slide');
	});

	$(window).resize(function() {
		if ($(window).width() > 463) {
			$('.toggle-nav').removeClass('active');
			$('.wrapper').removeClass('slide');
		}
	});
});