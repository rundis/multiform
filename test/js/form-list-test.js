(function (S) {
    "use strict";

    buster.testCase("Form List", {
        setUp: function () {
            this.container = document.createElement("div");

            this.buildForm = function () { return document.createElement("div"); };

            var oldForm = document.createElement("div");
            this.container.appendChild(oldForm);


            sfk.setupFormList(this.container, this.buildForm);
        },

        "does nothing at first": function () {
            assert.equals(this.container.childNodes.length, 1);
        },

        "adds new form when old form becomes dirty": function () {
            $(this.container.firstChild).trigger("dirty");

            assert.equals(this.container.childNodes.length, 2);
        },

        "does not add superflous forms": function () {


            $(this.container.firstChild).trigger("dirty");
            $(this.container.firstChild).trigger("dirty");

            assert.equals(this.container.childNodes.length, 2);
        },

        "adds new form when all are dirty": function () {
            $(this.container.firstChild).trigger("dirty");
            $(this.container.lastChild).trigger("dirty");

            assert.equals(this.container.childNodes.length, 3);
        }
    });
}(sfk));