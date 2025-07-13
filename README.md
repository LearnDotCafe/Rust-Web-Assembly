# My WASM App

This is a minimal Rust WebAssembly example using `wasm-bindgen` and `wasm-pack`.

## Building

Install [`wasm-pack`](https://rustwasm.github.io/wasm-pack/installer/), then run:

```bash
wasm-pack build --target web
```

This creates the `pkg/` directory containing the compiled WebAssembly and JavaScript bindings.

## Running
Start the webserver:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/static> in your browser.

Alternatively, you can open `static/index.html` directly via a `file://` URL;
the WebAssembly module will still load correctly thanks to the
instantiation fallback implemented in `main.js`.
