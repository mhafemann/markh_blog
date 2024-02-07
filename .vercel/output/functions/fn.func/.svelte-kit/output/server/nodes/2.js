

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.MfM7II5y.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.bdaJyo3N.js"];
export const stylesheets = [];
export const fonts = [];
