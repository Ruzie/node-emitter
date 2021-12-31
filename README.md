# node-emitter
A fast and small NodeJS event emitter, replacement of NodeJS default events, just plug and play.

# Important
Before you get into this, there are certain limitations by using it.

- There are no support for this methods `setMaxListeners`, `getMaxListeners`, `prependListener`, `prependOnceListener`.

- Doesn't have `lisentersCount` to apply it, you need to do `listeners.length` return an array length.

- Doesn't throw anything, creating mistakes it'll return nothing any info about the event.

# Installation

`$ npm install --save node-emitter`

# Usage

```js
const EventEmitter = require("node-emitter");

const ee = new EventEmitter();

ee.on("myEvent", () => {
  console.log("You just called my event");
});

ee.emit('myEvent');

ee.removeListener("myEvent");
ee.addListener("myEvent", fun => { });
```

# Support
[Join Discord](https://discord.gg/UrAFxHnXN3)
[MIT](https://github.com/dragonfirefox/node-emitter/blob/main/LICENSE)
