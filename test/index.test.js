import { test } from "uvu";
import { equal } from "uvu/assert";
import fastCamelCaseCss from "../dist/index.js";

test("Should handle common property", () => {
	equal(fastCamelCaseCss("border-radius"), "borderRadius");
});

test("Should handle prefixed property", () => {
	equal(fastCamelCaseCss("-webkit-border-radius"), "WebkitBorderRadius");
});

test("Should handle propery with `ms` prefix", () => {
	equal(fastCamelCaseCss("-ms-border-radius"), "msBorderRadius");
});

test("Should handle `float` property", () => {
	equal(fastCamelCaseCss("float"), "cssFloat");
});

test.run();
