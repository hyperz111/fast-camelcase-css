function replace(property) {
	let res = "";
	let cursor = 0;
	let index = property.indexOf("-");

	while (~index) {
		res += property.substring(cursor, index) + property[index + 1].toUpperCase();
		cursor = index + 2;
		index = property.indexOf("-", cursor);
	}

	return res + property.substring(cursor);
}

export default function camelCaseCss(property) {
	property = property.toLowerCase();

	if (property === "float") return "cssFloat";
	if (property.startsWith("-ms-")) return replace(property.substring(1));
	return replace(property);
}
