var sfk = sfk || {};

sfk.setupFormStatus = function(form, statusElement) {
	var $statusElement = $(statusElement);
	$statusElement.removeClass();
	$statusElement.addClass("pristine");
	
	$(form).on("dirty", function() {
		$statusElement.removeClass();
		$statusElement.addClass("dirty");
	});

	$(form).on("saved", function() {
		$statusElement.removeClass();
		$statusElement.addClass("saved");
	});
};