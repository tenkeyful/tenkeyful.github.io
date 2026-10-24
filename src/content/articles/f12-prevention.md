---
title: "F12 prevention"
description: "F12, Ctrl + Shift + I, Ctrl + U"
pubDate: Oct 24, 2026
updatedDate: Oct 24, 2026
category: "Technology"
---

> [!IMPORTANT]
> The level of protection is relative, because anything that runs on the client side can never be completely hidden.

## Ways to prevent source viewing and F12

### 1. Disable right-click context menu

```html
<script>
	document.addEventListener("contextmenu", function (e) {
		e.preventDefault();
	});
</script>
```

### 2. Disable F12, Ctrl + Shift + I, Ctrl + U, Ctrl + S

> [!NOTE]
> Power users can still bypass this by disabling JavaScript.

```html
<script>
	document.onkeydown = function (e) {
		if (
			e.keyCode === 123 || // F12
			(e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl + Shift + I
			(e.ctrlKey && e.keyCode === 85) || // Ctrl + U
			(e.ctrlKey && e.keyCode === 83) // Ctrl + S
		) {
			return false;
		}
	};
</script>
```

### 3. Detect DevTools and automatically redirect or blank the page

> [!WARNING]
> This method is not 100% accurate, but it may detect DevTools in pop-out mode.

```html
<script>
	setInterval(function () {
		if (
			window.outerHeight - window.innerHeight > 100 ||
			window.outerWidth - window.innerWidth > 100
		) {
			document.body.innerHTML = "";
			alert("DevTools detected! Please close it to continue.");
			window.location.href = "about:blank"; // or chrome://blank
		}
	}, 1000);
</script>
```

### 4. Obfuscate (JavaScript Code Obfuscation)

idk ask google or chatgpt

### 5. Run the page inside an iframe to limit inspecting

though let's be honest who tf uses iframe anyways?

```html
<iframe
	src="yourpage.html"
	sandbox="allow-scripts"
	style="border:none;width:100vw;height:100vh;"
></iframe>
```

> [!TIP]
> Wrapping the page in an iframe can make it more difficult for users to right-click or inspect the page easily.

## Important notes

_Preventing source-code viewing or blocking F12 should only be treated as a way to slow down or inconvenience curious users._

| Reason                                                 | Explanation                                                        |
| ------------------------------------------------------ | ------------------------------------------------------------------ |
| There is no way to hide HTML/JS source code 100%       | The browser needs to read it in order to render the page           |
| Developer Tools can still be opened in many other ways | It cannot be completely prohibited                                 |
| Obfuscation only makes things harder                   | It does not prevent reverse engineering                            |
| Security should be handled server-side                 | Sensitive logic and data should not rely on client-side protection |
