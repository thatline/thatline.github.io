const assert = require("assert");
const fs = require("fs");
const path = require("path");
const Validator = require("jsonschema").Validator;
const v = new Validator();

describe("JSON validation", function() {
    it("lines.json", function() {
        const linesSchema = JSON.parse(fs.readFileSync(path.normalize("test/lines.schema.json"), "utf8"));
        const input = JSON.parse(fs.readFileSync(path.normalize("docs/data/lines.json"), "utf8"));
        
        const res = v.validate(input, linesSchema);
        for (let error of res.errors) {
            console.log(error);
        }
        assert.ok(res.valid);
    });
});