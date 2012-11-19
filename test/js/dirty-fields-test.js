(function (S) {
  "use strict";

  buster.testCase("Dirty Fields", {
    setUp: function () {
      this.element = document.createElement("div");
      this.input = document.createElement("input");
      this.select = document.createElement("select");

      
      this.selectOption = document.createElement("option");
      this.selectOption.appendChild(document.createTextNode('Option1'));
      this.select.appendChild(this.selectOption);

      this.selectOption2 = document.createElement("option");
      this.selectOption2.appendChild(document.createTextNode('Option2'));
      this.select.appendChild(this.selectOption2); 


      this.element.appendChild(this.input);
      this.element.appendChild(this.select);

      sfk.setupDirtyFields(this.element);

      this.listener = this.spy();
      $(this.element).on("dirty", this.listener);
    },

    "triggers dirty when releasing key in input field": function () {
      $(this.input).val("dirty").trigger("keyup");
      assert.calledOnce(this.listener);
    },

    "triggers dirty when select field changes": function () {
      $(this.select).val("Option2").trigger("change");
      
      assert.calledOnce(this.listener);
    },
    "does not trigger when input hasn't changed": function() {
      $(this.input).val("dirty").trigger("keyup"); 
      $(this.input).val("dirty").trigger("keyup");

      assert.calledOnce(this.listener);  
    }
  });
}(sfk));