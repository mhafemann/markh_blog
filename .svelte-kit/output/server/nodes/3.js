

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/flow-fields/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.uDcBXFwM.js","_app/immutable/chunks/scheduler.kAlY8CUs.js","_app/immutable/chunks/index.A1kzl8PZ.js"];
export const stylesheets = [];
export const fonts = [];
