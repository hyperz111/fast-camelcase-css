function replace(property: string, index: number): string {
	let res = "";
	let cursor = 0;

	do {
		res += property.substring(cursor, index) + (property[index + 1] as string).toUpperCase();
		cursor = index + 2;
		index = property.indexOf("-", cursor);
	} while (~index);

	return res + property.substring(cursor);
}

export default function camelCaseCss(property: string): string {
	property = property.toLowerCase();

	if (property === "float") return "cssFloat";

	let index = property.indexOf("-");
	if (!~index) return property;

	if (property.startsWith("-ms-")) {
		property = property.substring(1);
		index = property.indexOf("-");
	}
	return replace(property, index);
}
