# 🌳 koki

A meat and potatoes JSON tree viewer.

## Usage

1. Download and include the JS and CSS files.

```html
<link rel="stylesheet" href="koki.css">
<script src="koki.js"></script>
```

2. Create a **container element**, preferably a `div`.

```html
<div id="koki">Hello</div>
```

3. Run the `kokiInit()` function with **data** (`object` or `array`) and an **container element** as arguments.

```html
<script>
  const data = { key: 123 };

  const container = document.getElementById("koki");
  kokiInit(data, container);
</script>
```

## To Do

- [ ] JS-Docs
- [ ] copy to clipboard
- [ ] Make it faster and lighter
- [ ] web component
- [x] user manual
- [x] customizable styles
