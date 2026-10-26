---
title: "List of Dino cheats"
description: "chrome://dino"
pubDate: Oct 22, 2026
updatedDate: Oct 23, 2026
category: "Technology"
---

## 1. God Mode

```js
Runner = Runner.getInstance();
window.__dinoOriginalGameOver = Runner.gameOver;
Runner.gameOver = () => {};
```

## 2. Speed

```js
Runner.getInstance().setSpeed(100);
```

## 3. Jump

```js
Runner.getInstance().tRex.setJumpVelocity(50);
```

## 4. Fly

```js
Runner.getInstance().tRex.groundYPos = 0;
```

## 5. Remove obstacles

```js
const runner = Runner.getInstance();
clearInterval(window.__dinoRemoveObstaclesTimer);
runner.horizon.obstacles = [];
window.__dinoRemoveObstaclesTimer = setInterval(() => {
	runner.horizon.obstacles = [];
}, 30);
```

## 6. Autoplay bot

> From [Auto-play the Chrome Dino Game with JavaScript](https://mathewsachin.github.io/blog/2026/03/14/chrome-dino-autoplay.html)

```js
(() => {
	const runner = Runner.getInstance();
	if (window.__dinoAutoPlayTimer) {
		clearInterval(window.__dinoAutoPlayTimer);
	}

	const sendKey = (type, code, keyCode) => {
		document.dispatchEvent(
			new KeyboardEvent(type, {
				code,
				keyCode,
				which: keyCode,
				bubbles: true,
				cancelable: true,
			}),
		);
	};

	let lastActionAt = 0;
	let ducking = false;

	window.__dinoAutoPlayTimer = setInterval(() => {
		if (runner.crashed || !runner.playing) return;

		const obstacle = runner.horizon?.obstacles?.[0];
		if (!obstacle) {
			if (ducking) {
				sendKey("keyup", "ArrowDown", 40);
				ducking = false;
			}
			return;
		}

		const canvasHeight = runner.dimensions.HEIGHT || runner.dimensions.height;
		const trexHeight = runner.tRex.config.HEIGHT || runner.tRex.config.height;
		const obstacleHeight = obstacle.typeConfig?.height || 0;
		const obstacleBottom = canvasHeight - obstacle.yPos - obstacleHeight;
		const threshold = 25 * runner.currentSpeed - obstacle.width / 2;

		if (obstacle.xPos >= threshold || Date.now() - lastActionAt < 250) return;

		if (obstacleBottom > trexHeight) return; // High bird: keep running

		if (obstacle.yPos > canvasHeight / 2) {
			if (ducking) {
				sendKey("keyup", "ArrowDown", 40);
				ducking = false;
			}
			sendKey("keydown", "Space", 32);
			sendKey("keyup", "Space", 32);
		} else {
			sendKey("keydown", "ArrowDown", 40);
			ducking = true;
		}

		lastActionAt = Date.now();
	}, runner.msPerFrame || 16);
})();
```

## 7. Invisible Dino

```js
Runner = Runner.getInstance().tRex;
window.__dinoOriginalDraw = Runner.draw;
Runner.draw = function () {};
```

## 8. Distance Counter

```js
Runner.getInstance();.distanceRan = Infinity;
```

## 9. Night Mode

```js
Runner.getInstance().invert(true);
Runner.getInstance().invert(false);
```

> https://greasyfork.org/en/scripts/540309-chrome-dino-mod-menu-15-3/code
