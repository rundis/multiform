var config = module.exports;

config["Browser tests"] = {
  libs: ["web-app/js/external/**/*.js", "test/lib/underscore.js", "test/lib/cull.js"],
  sources: ["web-app/js/**/*.js"],
  tests: ["test/js/**/*-test.js"],
  //testHelpers: ["test/lib/cull.js"],
  environment: "browser"
};
