export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","favicons/about.txt","favicons/android-chrome-192x192.png","favicons/android-chrome-512x512.png","favicons/apple-touch-icon.png","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/site.webmanifest","mhog.png"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.Dhdn7GUP.js","app":"_app/immutable/entry/app.Y0sJeY0g.js","imports":["_app/immutable/entry/start.Dhdn7GUP.js","_app/immutable/chunks/entry.BcD7gjx9.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/entry/app.Y0sJeY0g.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DMqKAw1p.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/flow-fields",
				pattern: /^\/flow-fields\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
