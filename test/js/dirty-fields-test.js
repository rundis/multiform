(function (S) {
  "use strict";

  var e = cull.dom.el;

  buster.testCase("Dirty Fields", {
    setUp: function () {

      this.input = e.input();
      this.select = e.select([e.option("Option1"), e.option("Option2")]);
      this.element = e.div([this.input, this.select]);

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