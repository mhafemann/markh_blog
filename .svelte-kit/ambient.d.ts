
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_INC: string;
	export const LC_FIG_SET_PARENT: string;
	export const FIG_PID: string;
	export const npm_package_devDependencies_prettier: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const NVM_CD_FLAGS: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_devDependencies_typescript: string;
	export const INIT_CWD: string;
	export const TERM: string;
	export const SHELL: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_config_author: string;
	export const FIGTERM_SESSION_ID: string;
	export const TMPDIR: string;
	export const npm_package_scripts_lint: string;
	export const npm_package_dependencies__sveltejs_kit: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_devDependencies_postcss_load_config: string;
	export const TERM_SESSION_ID: string;
	export const npm_package_private: string;
	export const npm_package_dependencies__sveltejs_adapter_vercel: string;
	export const npm_config_registry: string;
	export const PNPM_HOME: string;
	export const ZSH: string;
	export const FIG_SET_PARENT_CHECK: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const LS_COLORS: string;
	export const npm_package_scripts_check_watch: string;
	export const COMMAND_MODE: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_execpath: string;
	export const PAGER: string;
	export const npm_package_devDependencies_svelte: string;
	export const LSCOLORS: string;
	export const PATH: string;
	export const MARKPATH: string;
	export const npm_config_engine_strict: string;
	export const __CFBundleIdentifier: string;
	export const TTY: string;
	export const PWD: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_command: string;
	export const npm_package_scripts_preview: string;
	export const npm_lifecycle_event: string;
	export const LANG: string;
	export const npm_package_name: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const ITERM_PROFILE: string;
	export const NODE_PATH: string;
	export const npm_package_scripts_build: string;
	export const XPC_FLAGS: string;
	export const npm_config_node_gyp: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const SHLVL: string;
	export const HOME: string;
	export const COLORFGBG: string;
	export const npm_package_type: string;
	export const LC_TERMINAL_VERSION: string;
	export const FIG_SET_PARENT: string;
	export const ITERM_SESSION_ID: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const npm_package_scripts_format: string;
	export const npm_lifecycle_script: string;
	export const npm_package_devDependencies_prettier_plugin_tailwindcss: string;
	export const NVM_BIN: string;
	export const npm_config_user_agent: string;
	export const LC_TERMINAL: string;
	export const npm_package_scripts_check: string;
	export const FIG_TERM: string;
	export const COLORTERM: string;
	export const npm_node_execpath: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_INC: string;
		LC_FIG_SET_PARENT: string;
		FIG_PID: string;
		npm_package_devDependencies_prettier: string;
		TERM_PROGRAM: string;
		NODE: string;
		NVM_CD_FLAGS: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_devDependencies_typescript: string;
		INIT_CWD: string;
		TERM: string;
		SHELL: string;
		npm_package_devDependencies_vite: string;
		npm_config_author: string;
		FIGTERM_SESSION_ID: string;
		TMPDIR: string;
		npm_package_scripts_lint: string;
		npm_package_dependencies__sveltejs_kit: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_scripts_dev: string;
		npm_package_devDependencies_postcss_load_config: string;
		TERM_SESSION_ID: string;
		npm_package_private: string;
		npm_package_dependencies__sveltejs_adapter_vercel: string;
		npm_config_registry: string;
		PNPM_HOME: string;
		ZSH: string;
		FIG_SET_PARENT_CHECK: string;
		NVM_DIR: string;
		USER: string;
		LS_COLORS: string;
		npm_package_scripts_check_watch: string;
		COMMAND_MODE: string;
		PNPM_SCRIPT_SRC_DIR: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_package_devDependencies_postcss: string;
		npm_package_devDependencies_tslib: string;
		npm_execpath: string;
		PAGER: string;
		npm_package_devDependencies_svelte: string;
		LSCOLORS: string;
		PATH: string;
		MARKPATH: string;
		npm_config_engine_strict: string;
		__CFBundleIdentifier: string;
		TTY: string;
		PWD: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_command: string;
		npm_package_scripts_preview: string;
		npm_lifecycle_event: string;
		LANG: string;
		npm_package_name: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		ITERM_PROFILE: string;
		NODE_PATH: string;
		npm_package_scripts_build: string;
		XPC_FLAGS: string;
		npm_config_node_gyp: string;
		XPC_SERVICE_NAME: string;
		npm_package_version: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_autoprefixer: string;
		npm_package_devDependencies_svelte_check: string;
		SHLVL: string;
		HOME: string;
		COLORFGBG: string;
		npm_package_type: string;
		LC_TERMINAL_VERSION: string;
		FIG_SET_PARENT: string;
		ITERM_SESSION_ID: string;
		LESS: string;
		LOGNAME: string;
		npm_package_scripts_format: string;
		npm_lifecycle_script: string;
		npm_package_devDependencies_prettier_plugin_tailwindcss: string;
		NVM_BIN: string;
		npm_config_user_agent: string;
		LC_TERMINAL: string;
		npm_package_scripts_check: string;
		FIG_TERM: string;
		COLORTERM: string;
		npm_node_execpath: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
