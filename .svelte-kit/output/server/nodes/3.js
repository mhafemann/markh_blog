

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/flow-fields/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Bym8rLS1.js","_app/immutable/chunks/DYjCt7Qj.js","_app/immutable/chunks/B75wjByV.js"];
export const stylesheets = [];
export const fonts = [];
