

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.uRcAgkWV.js","_app/immutable/chunks/scheduler.kAlY8CUs.js","_app/immutable/chunks/index.A1kzl8PZ.js","_app/immutable/chunks/entry.URDiIio9.js"];
export const stylesheets = [];
export const fonts = [];
