var sfk = this.sfk || {};

sfk.setupFormList = function (container, buildForm) {
  var addClean;

  var bindAddClean = function () {
    $(container.lastChild).one("dirty", addClean);
  };

  addClean = function () {
    var clean = buildForm();
    container.appendChild(clean);
    bindAddClean();
  };

  bindAddClean();
};