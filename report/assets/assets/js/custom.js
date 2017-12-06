$(function() {
	
	// collapse icon  
	$("[data-toggle=collapse]").click(function( ev ) {
		var current_icon = $(ev.currentTarget.firstChild.firstChild)
		if(current_icon.hasClass('fa-caret-right')) {
			addIconDownClass(current_icon);
		} else if (current_icon.hasClass('fa-caret-down')) {
			removeIconDownClass(current_icon)
		}
	});

	function addIconDownClass(current_icon) {
		current_icon.removeClass('fa-caret-right')
		current_icon.addClass('fa-caret-down')
	}
	function removeIconDownClass(current_icon) {
		current_icon.removeClass('fa-caret-down')
		current_icon.addClass('fa-caret-right')
	}


	// modal load url
	$('.view-log-btn').on('click', function(e){
		
		$('#myModalLabel').html('View Log <small>(' + $(this).attr('data-name') +')</small>');

		// var loadurl = $(this).attr('data-load-url');
		var loadurl = 'http://amd-clmc-agent.github.io/reports//amd-clmc-12-04-ci/all_masters/catkin_all_masters_catkin_package_18004736_ut.txt';
		$('#myModal').find('.modal-body').load(loadurl);
		$('#myModal').find('.modal-body').wrap( "<samp></samp>" );

	});
});