import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``} <div class="fixed left-12 top-12 z-50 text-fuchsia-700" data-svelte-h="svelte-b2cxfx"><h1 class="font-mono text-3xl uppercase"><a class="z-50" href="/#">markh.dev</a></h1> <div class="flex space-x-4"><div class="font-mono text-lg uppercase"><a href="/flow-fields" class="">Flow-Fields</a></div></div></div>`;
});
export {
  Layout as default
};
