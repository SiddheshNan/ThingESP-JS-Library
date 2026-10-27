# ThingESP JS Library

Node.js client for [ThingESP](https://thingesp.siddhesh.me). Control a device over WhatsApp from JavaScript.

## Install

```bash
npm install mqtt
```

## Usage

```js
const mqtt = require("mqtt");

const username = "username_here";
const projectName = "projectName_here";
const pass = "device_credentials_here";

const handleResponse = (query) => {
  if (query == "hi") return "sup";
};
```

See `Example.js` for the full client. Whatever `handleResponse` returns is sent back as the WhatsApp reply.

## License

MIT
