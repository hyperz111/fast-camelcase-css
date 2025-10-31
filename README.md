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

```console
camelcase-css x 75,735 ops/sec ±1.12% (53 runs sampled)
fast-camelcase-css x 263,446 ops/sec ±0.92% (67 runs sampled)
Fastest is fast-camelcase-css
```

## Copyright

Copyright © 2025-Present [Hyper-Z11](https://github.com/hyperz111/). Licensed under [MIT License](https://opensource.org/license/mit/).
