const assert = require("assert");
const fs = require("fs");
const path = require("path");
const Validator = require("jsonschema").Validator;
const v = new Validator();

const dataFile = JSON.parse(fs.readFileSync(path.normalize("docs/data/lines.json"), "utf8"));

describe("JSON validation", function() {
    it("lines.json matches schema", function() {
        const linesSchema = JSON.parse(fs.readFileSync(path.normalize("test/lines.schema.json"), "utf8"));
        
        const res = v.validate(dataFile, linesSchema);
        for (let error of res.errors) {
            console.log(error);
        }
        assert.ok(res.valid);
    });
    it("lines.json each entry has a unique URL", function() {
        let urls = new Set();
        for (let line of dataFile) {
            // Ensure there is a url. If not, dump the entry
            assert.ok(line.hasOwnProperty("genius_link"), JSON.stringify(line));
            urls.add(line.genius_link);
        }
        assert.equal(dataFile.length, urls.size);
    });
});