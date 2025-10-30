import Benchmark from "benchmark";
import fastCamelCaseCss from "../dist/index.js";
import camelCaseCss from "camelcase-css";
import properties from "./properties.json" with { type: "json" };

const suite = new Benchmark.Suite();

function makeSuite(fn) {
	let property;
	for (property of properties) fn(property);
}

suite
	.add("camelcase-css", function () {
		makeSuite(camelCaseCss);
	})
	.add("fast-camelcase-css", function () {
		makeSuite(fastCamelCaseCss);
	})
	.on("cycle", function (event) {
		console.log(String(event.target));
	})
	.on("complete", function () {
		console.log("Fastest is " + this.filter("fastest").map("name"));
	})
	.run({ async: true });
