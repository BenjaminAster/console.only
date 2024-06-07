
const console_log = console.log.bind(console);
const console_clear = console.clear.bind(console);

let alreadyCalled = false;
let consoleOnlyLogs = [];

console.only = function (...args) {
	if (!alreadyCalled) {
		alreadyCalled = true;
		console_clear();
		console.log
			= console.clear
			= console.warn
			= console.error
			= console.info
			= console.debug
			= console.trace
			= console.assert
			= console.table
			= console.dir
			= console.dirxml
			= function () { };
		globalThis.addEventListener?.("error", () => {
			globalThis.setTimeout(() => {
				console_clear();
				for (const log of consoleOnlyLogs) {
					console_log(...log);
				}
			});
		});
	}

	console_log(...args);
	consoleOnlyLogs.push(args);
};

export { };
