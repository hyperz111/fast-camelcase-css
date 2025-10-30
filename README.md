# fast-camelcase-css

The fast version of [`stevenvachon/camelcase-css`](https://github.com/stevenvachon/camelcase-css);

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

## Copyright

Copyright © 2025-Present [Hyper-Z11](https://github.com/hyperz111/). Licensed under [ISC License](https://www.isc.org/licenses/).
