

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.dBZO53yf.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.UXyqWvzy.js"];
export const stylesheets = ["_app/immutable/assets/0.sTK2O70c.css"];
export const fonts = [];
