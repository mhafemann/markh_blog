

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.vqMi8ZNJ.js","_app/immutable/chunks/DYjCt7Qj.js","_app/immutable/chunks/B75wjByV.js"];
export const stylesheets = [];
export const fonts = [];
