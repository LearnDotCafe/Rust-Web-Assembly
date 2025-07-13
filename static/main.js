import init, { greet } from '../pkg/my_wasm_app.js';

async function run() {
    // When using init() without arguments, it will fetch the wasm file,
    // which may not work when loading the page via file:// URLs in some browsers.
    // In that case, fetch the wasm bytes manually and pass them to init().
    if (!WebAssembly.instantiateStreaming) {
        const response = await fetch(
            new URL('../pkg/my_wasm_app_bg.wasm', import.meta.url)
        );
        const bytes = await response.arrayBuffer();
        await init(bytes);
    } else {
        await init();
    }
    document.getElementById('output').textContent = greet('World');
}

run();
