import Benchmark from "benchmark";
import fastCamelCaseCss from "../src/index.js";
import camelCaseCss from "camelcase-css";

const suite = new Benchmark.Suite();

suite
	.add("camelcase-css", function () {
		camelCaseCss("-webkit-tap-highlight-color");
	})
	.add("fast-camelcase-css", function () {
		fastCamelCaseCss("-webkit-tap-highlight-color");
	})
	.on("cycle", function (event) {
		console.log(String(event.target));
	})
	.on("complete", function () {
		console.log("Fastest is " + this.filter("fastest").map("name"));
	})
	.run({ async: true });
