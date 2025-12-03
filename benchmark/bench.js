import Benchmark from "benchmark";
import fastCamelCaseCss from "../dist/index.js";
import camelCaseCss from "camelcase-css";

const suite = new Benchmark.Suite();
const text = "color";

suite
	.add("camelcase-css", function () {
		camelCaseCss(text);
	})
	.add("fast-camelcase-css", function () {
		fastCamelCaseCss(text);
	})
	.on("cycle", function (event) {
		console.log(String(event.target));
	})
	.on("complete", function () {
		console.log("Fastest is " + this.filter("fastest").map("name"));
	})
	.run({ async: true });
