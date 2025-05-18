import init, { greet } from '../pkg/my_wasm_app.js';

async function run() {
    await init();
    document.getElementById('output').textContent = greet('World');
}

run();
