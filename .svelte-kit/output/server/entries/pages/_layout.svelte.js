import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``} <div class="fixed left-0 right-0 top-0 z-50 rounded-lg p-4 text-white backdrop-blur md:right-auto" data-svelte-h="svelte-6va9oz"><h1 class="font-mono text-xl uppercase tracking-wide text-white"><a class="z-50" href="/#">markh.dev</a></h1></div>`;
});
export {
  Layout as default
};
