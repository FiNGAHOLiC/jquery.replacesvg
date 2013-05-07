# jquery.replacesvg.js

jquery.replacesvg.js is a simple svg replacement plugin.

## Demo

http://fingaholic.github.com/jquery.replacesvg/

## Usage

### Options

* **defaultsvg** `Boolean` If the value of the src attributes is the svg, set to true. If not, set to false. (default value is false)
* **dataname** `String` Data attribute name for getting alternative image path (default value is 'altimgsrc').
* **ns** `String` Specifies the namespace URI (default value is 'http://www.w3.org/2000/svg').

### Code

```html
<img src="./img/star.svg" width="100" height="95" alt="star" data-altimgsrc="./img/star.png" class="js-replacesvg">
```

```javascript
$('.js-replacesvg').replacesvg();
```

## Requirements

jQuery 1.7.x or later.

## Browsers

IE6+ and other new browsers.

## License

Licensed under the MIT license.
