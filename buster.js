var config = module.exports;

config["Browser tests"] = {
  libs: ["web-app/js/external/**/*.js"],
  sources: ["web-app/js/**/*.js"],
  tests: ["test/js/**/*-test.js"],
  environment: "browser"
};
