var sfk = this.sfk || {};

sfk.setupDirtyFields = function (element) {

     
  function bindDirtyCheck(element) {
    var oldValue = $(element).val();
    
    $(element).on("keyup change", function () {
      if ($(this).val() !== oldValue) {
        oldValue = $(this).val();
        $(this).trigger("dirty");
      }
    });
  }

  $(element).find("input, select, textarea").each(function() {
    bindDirtyCheck(this);
  });
    
  
};
