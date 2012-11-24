var config = module.exports;

config["Browser tests"] = {
    libs: ["app/lib/angular/angular.js"],
    sources: ["app/js/app.js",
              "app/js/services.js",
              "app/js/controllers.js",
              "app/js/filters.js",
              "app/js/directives"],
    tests: ["test/unit/**/*-test.js"],
    //testHelpers: ["test/lib/cull.js"],
    environment: "browser"
};
