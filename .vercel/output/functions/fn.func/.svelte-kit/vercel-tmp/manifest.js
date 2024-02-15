export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.ov9tBPMb.js","app":"_app/immutable/entry/app.vBrQ9I-l.js","imports":["_app/immutable/entry/start.ov9tBPMb.js","_app/immutable/chunks/entry.URDiIio9.js","_app/immutable/chunks/scheduler.kAlY8CUs.js","_app/immutable/entry/app.vBrQ9I-l.js","_app/immutable/chunks/scheduler.kAlY8CUs.js","_app/immutable/chunks/index.A1kzl8PZ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
