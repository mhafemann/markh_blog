

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ZjrNpL5G.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.bdaJyo3N.js","_app/immutable/chunks/entry.q8_hOP7W.js"];
export const stylesheets = [];
export const fonts = [];
