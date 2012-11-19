var sfk = this.sfk || {};

sfk.cloneForm = function(form) {
	var clone = $(form).clone();
	clone.find("input").val("");

	return clone[0];
};