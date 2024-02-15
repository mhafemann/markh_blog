

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/flow-fields/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DLC0aNJo.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DMqKAw1p.js"];
export const stylesheets = [];
export const fonts = [];
