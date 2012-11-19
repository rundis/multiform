(function (S) {
  "use strict";

  buster.testCase("Form cloner", {
    setUp: function () {
   	  this.form = document.createElement("form");
      this.statusElement = document.createElement("span");
      sfk.setupFormStatus(this.form, this.statusElement);
    },

    "default for formstatus is pristine": function () {
      assert.className(this.statusElement, "pristine");
    },
    
    "handles dirty event on form": function () {
      $(this.form).trigger("dirty");

      assert.className(this.statusElement, "dirty");
      refute.className(this.statusElement, "pristine");
    },

    "handles saved event": function () {
		$(this.form).trigger("saved");    	
		assert.className(this.statusElement, "saved");
    }
  });
}(sfk));