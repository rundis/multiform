(function (S) {
  "use strict";

  buster.testCase("Form cloner", {
    
    "clone form with no inputs": function () {
      var form = document.createElement("form");
      
      var cloneForm = sfk.cloneForm(form);
      assert.equals(0,cloneForm.childNodes.length); 
      refute.equals(form, cloneForm);  
    }
  });
}(sfk));