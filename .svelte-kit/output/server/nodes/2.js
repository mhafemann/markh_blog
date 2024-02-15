

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.7aqnd2ec.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DMqKAw1p.js"];
export const stylesheets = [];
export const fonts = [];
