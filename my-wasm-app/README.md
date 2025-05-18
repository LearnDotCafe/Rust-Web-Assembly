# My WASM App

This is a minimal Rust WebAssembly example using `wasm-bindgen` and `wasm-pack`.

## Building

Install [`wasm-pack`](https://rustwasm.github.io/wasm-pack/installer/), then run:

```bash
wasm-pack build --target web
```

This creates the `pkg/` directory containing the compiled WebAssembly and JavaScript bindings.

## Running

Serve the `static/` directory with any static file server. For example:

```bash
cd static
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser.
