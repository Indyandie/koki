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

### Styling

#### CSS Variables

The main styles can be customized using the following CSS variables. All the default colors use **HTML color names**.

```css
/* Header */
--arbol-header-bg: black;
--arbol-header-text-color: whitesmoke;

/* General */
--arbol-bg-color: black;
--arbol-text-color: white;
--arbol--text-font: serif;
--arbol--text-size: 16px;

/* Code */
--arbol-code-text-font: monospace;
--arbol-code-text-size: 14px;
--arbol-code-text-color: gray;
--arbol-code-variable: ghostwhite;
--arbol-code-value: lightblue;
--arbol-code-numeric: turquoise;
--arbol-code-bool: deepskyblue;
--arbol-code-string: dodgerblue;
--arbol-code-undefined: darkseagreen;
--arbol-code-misc: orchid;
```

##### Example

Define the CSS variable under a class or any other selector that target the **container element**.

```html
<style>
  .htmlly {
    --arbol-header-bg: black;
    --arbol-header-text-color: navajowhite;
    --arbol-bg-color: midnightblue;
    --arbol-text-color: antiquewhite;
    --arbol--text-font: sans-serif;
    --arbol--text-size: 17px;
    --arbol-code-text-font: "Jetbrains Mono", monospace;
    --arbol-code-text-size: 13px;
    --arbol-code-text-color: ghostwhite;
    --arbol-code-variable: orange;
    --arbol-code-value: powderblue;
    --arbol-code-numeric: cyan;
    --arbol-code-bool: dodgerblue;
    --arbol-code-string: darkseagreen;
    --arbol-code-undefined: darkgray;
    --arbol-code-misc: lightgoldenrodyellow;
  }
</style>

<div id="theme-override" class="htmlly">Hello</div>
```

#### Built-in Theme

At the moment there is only one theme (**kurokula**). Apply by adding the **`kurakula`** class to the **container element**.

```html
<div id="json-tree-poke" class="kurokula">Hello</div>
```

## To Do

- [ ] JS-Docs
- [ ] copy to clipboard
- [ ] Make it faster and lighter
- [ ] web component
- [x] user manual
- [x] customizable styles
