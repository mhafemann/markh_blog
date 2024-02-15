import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.tq2HZg9J.js","_app/immutable/chunks/scheduler.kAlY8CUs.js","_app/immutable/chunks/index.A1kzl8PZ.js"];
export const stylesheets = ["_app/immutable/assets/0.1si24otm.css"];
export const fonts = [];
