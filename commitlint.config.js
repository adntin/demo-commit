module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // "scope-empty": [2, "always"],
    // "scope-enum": [2, "always", ["container", "components"]],
    "body-empty": [2, "always"],
    "footer-empty": [2, "always"],
    "subject-case": [2, "never", []]
  }
};
