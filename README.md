# fast-camelcase-css

The fast version of [`stevenvachon/camelcase-css`](https://github.com/stevenvachon/camelcase-css).

## Install

```sh
$ npm install fast-camelcase-css
```

## Usage

```js
import fastCamelCaseCss from "fast-camelcase-css";

fastCamelCaseCss("-webkit-border-radius"); //-> WebkitBorderRadius
fastCamelCaseCss("-moz-border-radius"); //-> MozBorderRadius
fastCamelCaseCss("-ms-border-radius"); //-> msBorderRadius
fastCamelCaseCss("border-radius"); //-> borderRadius
```

## API

### `fastCamelCaseCss(property)`

Return: `string`

Convert a kebab-cased CSS property into a camel-cased DOM property.

#### `property`

Type: `string`

## Benchmark

You can try to benchmark it yourself. But in my device, this is the result i get.
This is using `color` property for benchmarking.

```console
camelcase-css x 1,036,719 ops/sec ±0.76% (64 runs sampled)
fast-camelcase-css x 3,081,526 ops/sec ±1.35% (60 runs sampled)
Fastest is fast-camelcase-css
```

## License

[MIT](https://opensource.org/license/mit/)
