# shade-hex

```sh
shadeHex(color, value);
```

Returns a brightened or darkened hex string.

[Npm package](https://www.npmjs.com/package/shade-hex)

[Github repo](https://github.com/3derekmason/shade-hex)

## Installation

```sh
npm install shade-hex
```

## Usage

```sh
import shadeHex from "shade-hex";
```

#### - Inputs -

`color` - A color value '#XXXXXX' or 'XXXXXX'.

`value` - Amount you want to brighten or darken the color.

#### - Outputs -

Will return a brightened or darkened shade of the input color.

Ex:

```sh
console.log(shadeHex("#d50000", 2);
  ---> // '#f72222'
```

```sh
console.log(shadeHex("#d50000", -2);
  ---> // '#b30000'
```

```sh
console.log(shadeHex("212121", 3);
  ---> // '#545454'
```

---

Thanks for reading! Check out my portfolio at [derekmason.dev](https://www.derekmason.dev/)
