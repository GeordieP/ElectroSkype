(function() {
	var fs = require('fs');
	var shell = require('shell');
	var ipc = require('electron').ipcRenderer;

	var cssPath = __dirname + '/../css/skypeStyles/skype.css';
	var cssData;

	var remote = require('remote');
	var BrowserWindow =  remote.require('browser-window');

	fs.readFile(cssPath, 'utf-8', function(err, data) {
		if (err) console.log(err);
		cssData = data;
		window.cssData = cssData;
		console.log("set data");
	});

	prepareWebView = function() {
		var webView = document.getElementById("skype-webview");
		webView.removeEventListener('dom-ready', prepareWebView);

		webView.loadURL('https://web.skype.com', {
			// Fake user agent to Edge to enable audio calling. Video calling is not functional.
			userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586'
		});
	}

	window.electronWindowSetup = function() {
		var webView = document.getElementById("skype-webview");
		webView.addEventListener('dom-ready', prepareWebView);


		webView.addEventListener('did-stop-loading', function(event) {
			webView.insertCSS(window.cssData);
		});

		webView.addEventListener('new-window', function(event) {
			shell.openExternal(event.url);
		});

		document.getElementById('openConsoleBtn').addEventListener('click', function(event) {
			BrowserWindow.getFocusedWindow().webContents.openDevTools();
		});

		document.getElementById('min-btn').addEventListener('click', function(event) {
			BrowserWindow.getFocusedWindow().minimize();
		});

		document.getElementById('max-btn').addEventListener('click', function(event) {
			BrowserWindow.getFocusedWindow().maximize();
		});

		// use an IPC for this one so we can get the window state and save it to a file before it closes
		document.getElementById('close-btn').addEventListener('click', function(event) {
			ipc.send('appClose');
		});
	}
})();
