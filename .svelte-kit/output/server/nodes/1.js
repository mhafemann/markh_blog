

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d1XIusRa.js","_app/immutable/chunks/DYjCt7Qj.js","_app/immutable/chunks/B75wjByV.js","_app/immutable/chunks/D2s5qe6s.js"];
export const stylesheets = [];
export const fonts = [];
