

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2._uM4wd_R.js","_app/immutable/chunks/scheduler.kAlY8CUs.js","_app/immutable/chunks/index.A1kzl8PZ.js"];
export const stylesheets = [];
export const fonts = [];
